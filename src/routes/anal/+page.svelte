<script>
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";
  import Chart from "chart.js/auto";

  import ip_checkpoint from "./ip_checkpoint.json";

  const colorPalette = [
    "rgba(255, 99, 132, 0.2)", // Red
    "rgba(54, 162, 235, 0.2)", // Blue
    "rgba(255, 206, 86, 0.2)", // Yellow
    "rgba(75, 192, 192, 0.2)", // Green
    "rgba(153, 102, 255, 0.2)", // Purple
    // Add more colors as needed
  ];

  let data = [];
  let user = "";
  let pass = "";
  let chartVisits;
  let chartUrls;

  const ipCache = ip_checkpoint;

  let log = "";

  function appendLog(message) {
    log = log + message + "\n";
  }

  async function getData() {
    appendLog("Loading data...");
    const pb = new PocketBase("https://db.080609.xyz");
    data = await pb
      .collection("kf_analytics")
      .getFullList(200 /* batch size */, {
        sort: "-created",
      });
    data = data.map((item) => {
      return item;
    });
  }

  async function auth() {
    appendLog("Authenticating");
    const pb = new PocketBase("https://db.080609.xyz");
    try {
      await pb.collection("users").authWithPassword(user, pass);
    } catch (error) {
      appendLog("An error occurred: " + error);
    }
  }

  function categorizeDevice(width, height) {
    // Example categorization logic
    if (width <= 768 && height <= 1024) {
      return "Mobile";
    } else if (width > 768 && width <= 1024) {
      return "Tablet";
    } else {
      return "Desktop";
    }
  }

  function renderAllCharts() {
    renderDeviceTypesChart();
    renderVisitsChart();
    renderUrlsAllTimeChart();
    renderUrlsMonthChart();
    renderMostCountriesChart();
    renderMostOrganizationsChart();
  }

  function renderDeviceTypesChart() {
    // Process device data
    const deviceCounts = {};
    data.forEach((visit) => {
      // Check if both width and height are greater than 0
      if (visit.width > 0 && visit.height > 0) {
        const deviceType = categorizeDevice(visit.width, visit.height);
        if (!deviceCounts[deviceType]) {
          deviceCounts[deviceType] = 0;
        }
        deviceCounts[deviceType]++;
      }
    });

    // Prepare data for the device type chart
    const deviceLabels = Object.keys(deviceCounts);
    const deviceValues = Object.values(deviceCounts);

    // Create the device type chart
    const ctxDeviceTypes = document
      .getElementById("deviceTypesChart")
      .getContext("2d");
    new Chart(ctxDeviceTypes, {
      type: "bar", // Change to horizontal bar chart
      data: {
        labels: deviceLabels,
        datasets: [
          {
            label: "Device Types",
            data: deviceValues,
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Number of Visits",
            },
          },
          y: {
            title: {
              display: true,
              text: "Device Type",
            },
          },
        },
        plugins: {
          legend: {
            position: "right",
          },
          title: {
            display: true,
            text: "Most Used Device Types",
          },
        },
      },
    });
  }

  function renderVisitsChart() {
    const visitsByDay = {};
    const urlsByVisits = {};

    data.forEach((visit) => {
      const date = new Date(visit.unix);
      const day = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD

      if (!visitsByDay[day]) {
        visitsByDay[day] = 0;
      }
      visitsByDay[day]++;

      // Process URL data only if it contains "https://blalange.org"
      if (visit.url.includes("https://blalange.org")) {
        if (!urlsByVisits[visit.url]) {
          urlsByVisits[visit.url] = 0;
        }
        urlsByVisits[visit.url]++;
      }
    });

    // Prepare data for the visits chart
    const labels = Object.keys(visitsByDay);
    const values = Object.values(visitsByDay);

    // Create the visits chart
    const ctxVisits = document.getElementById("visitsChart").getContext("2d");
    chartVisits = new Chart(ctxVisits, {
      type: "bar", // You can choose the type of chart you prefer
      data: {
        labels: labels,
        datasets: [
          {
            label: "Visits",
            data: values,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Visits per Day",
          },
        },
      },
    });
  }

  function renderUrlsMonthChart() {
    const urlsByVisits = {};
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    data.forEach((visit) => {
      if (!urlsByVisits[visit.url]) {
        urlsByVisits[visit.url] = 0;
      }
      urlsByVisits[visit.url]++;
    });

    // Filter URLs visited in the past month and only include those containing "https://blalange.org"
    const urlsPastMonth = Object.entries(urlsByVisits).filter(
      ([url, visits]) => {
        const visitDate = new Date(data.find((d) => d.url === url).unix);
        return (
          visitDate >= oneMonthAgo &&
          url.includes("https://blalange.org") &&
          visits >= 2
        );
      }
    );

    const colors = urlsPastMonth.map((_, index) => {
      // Use modulo to cycle through the color palette if there are more countries than colors
      return colorPalette[index % colorPalette.length];
    });

    // Create the URLs chart for the past month
    const ctxUrlsPastMonth = document
      .getElementById("urlsChartPastMonth")
      .getContext("2d");
    chartUrls = new Chart(ctxUrlsPastMonth, {
      type: "pie",
      data: {
        labels: urlsPastMonth.map(([url]) => url),
        datasets: [
          {
            data: urlsPastMonth.map(([, visits]) => visits),
            backgroundColor: colors,
            borderColor: colorPalette,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Most Visited URLs in the Past Month",
          },
        },
      },
    });
  }

  function renderUrlsAllTimeChart() {
    const urlsByVisits = {};

    data.forEach((visit) => {
      if (!urlsByVisits[visit.url]) {
        urlsByVisits[visit.url] = 0;
      }
      urlsByVisits[visit.url]++;
    });

    // Filter URLs for all time and only include those containing "https://blalange.org"
    const urlsAllTime = Object.entries(urlsByVisits).filter(([url, visits]) => {
      return url.includes("https://blalange.org") && visits >= 2;
    });

    const colors = urlsAllTime.map((_, index) => {
      // Use modulo to cycle through the color palette if there are more countries than colors
      return colorPalette[index % colorPalette.length];
    });

    // Create the URLs chart for all time
    const ctxUrlsAllTime = document
      .getElementById("urlsChartAllTime")
      .getContext("2d");
    new Chart(ctxUrlsAllTime, {
      type: "pie",
      data: {
        labels: urlsAllTime.map(([url]) => url),
        datasets: [
          {
            data: urlsAllTime.map(([, visits]) => visits),
            backgroundColor: colors,
            borderColor: colorPalette,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Most Visited URLs All Time",
          },
        },
      },
    });
  }

  async function renderMostCountriesChart() {
    // Initialize an object to count country occurrences
    const countryCounts = {};

    // Iterate over each visit to count country occurrences
    for (const visit of data) {
      appendLog(`Processing ${visit.ip}...`);
      const countryCode = await ipToCountry(visit.ip);
      if (!countryCounts[countryCode]) {
        countryCounts[countryCode] = 0;
      }
      countryCounts[countryCode]++;
    }
    appendLog(`Processed ${data.length} visits.`);

    // Prepare data for the chart
    const countryLabels = Object.keys(countryCounts);
    const countryValues = Object.values(countryCounts);

    const countryColors = countryLabels.map((_, index) => {
      // Use modulo to cycle through the color palette if there are more countries than colors
      return colorPalette[index % colorPalette.length];
    });

    // Create the country chart
    const ctxCountryChart = document
      .getElementById("countryChart")
      .getContext("2d");
    new Chart(ctxCountryChart, {
      type: "pie",
      data: {
        labels: countryLabels,
        datasets: [
          {
            data: countryValues,
            backgroundColor: countryColors, // Use the dynamically assigned colors
            borderColor: colorPalette, // Use the same colors for the border
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Most Visited Countries",
          },
        },
      },
    });
  }

  async function renderMostOrganizationsChart() {
    // Initialize an object to count organization occurrences
    const organizationCounts = {};

    let count = 0;
    // Iterate over each visit to count organization occurrences
    for (const visit of data) {
      count++;
      appendLog(`Processed${count} out of ${data.length} visits...`);
      const organization = await ipToOrg(visit.ip);
      if (!organizationCounts[organization]) {
        organizationCounts[organization] = 0;
      }
      organizationCounts[organization]++;
    }
    appendLog(`Processed ${data.length} visits.`);

    // Prepare data for the chart
    const organizationLabels = Object.keys(organizationCounts);
    const organizationValues = Object.values(organizationCounts);

    const organizationColors = organizationLabels.map((_, index) => {
      // Use modulo to cycle through the color palette if there are more countries than colors
      return colorPalette[index % colorPalette.length];
    });

    // Create the country chart
    const ctxCountryChart = document
      .getElementById("organizationChart")
      .getContext("2d");
    new Chart(ctxCountryChart, {
      type: "pie",
      data: {
        labels: organizationLabels,
        datasets: [
          {
            data: organizationValues,
            backgroundColor: organizationColors, // Use the dynamically assigned colors
            borderColor: colorPalette, // Use the same colors for the border
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Most Visited Organizations",
          },
        },
      },
    });
  }

  async function ipData(ip) {
    if (ip === "" || ip === undefined || ip === null) {
      return "Unknown";
    }

    if (ipCache[ip]) {
      return ipCache[ip];
    }

    const response = await fetch(`https://ip.guide/${ip}`);
    const data = await response.json();

    ipCache[ip] = data;

    return data;
  }

  async function ipToCountry(ip) {
    let data = await ipData(ip);

    // Check if data and data.location are defined
    if (data && data.location) {
      let country = data.location.country;
      if (!country) {
        country = "Unknown";
      }
      return country;
    } else {
      // If data or data.location is undefined, return a default value
      return "Unknown";
    }
  }

  async function ipToOrg(ip) {
    let data = await ipData(ip);

    // Check if data and data.location are defined
    if (data && data.location) {
      let org = data.network.autonomous_system.organization;
      if (!org) {
        org = "Unknown";
      }
      return org;
    } else {
      // If data or data.location is undefined, return a default value
      return "Unknown";
    }
  }

  function logIpCountryCache() {
    // Log the contents of ipCache as json
    console.log(JSON.stringify(ipCache));
  }
</script>

<div class="flex flex-col items-center">
  <div class="p-6 mt-10 rounded shadow-md shadow-black w-80 text-center">
    <input
      bind:value={user}
      placeholder="user"
      class="w-full mb-4 p-2 border-black border-2 rounded"
    />
    <input
      bind:value={pass}
      placeholder="pass"
      class="w-full mb-4 p-2 border-black border-2 rounded"
      type="password"
    />
    <button
      on:click={auth}
      class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-2"
      >Auth</button
    >
    <button
      on:click={getData}
      class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-2"
      >Get data</button
    >
    <button
      on:click={renderAllCharts}
      class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-2"
      >Render</button
    >
    <button
      on:click={logIpCountryCache}
      class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >Log ipCache</button
    >
  </div>
  <textarea
    class="w-3/6 h-auto mt-4 p-2 border-black border-2 rounded"
    disabled
  >
    {log}
  </textarea>
</div>

<canvas class="max-h-screen" id="visitsChart"></canvas>
<canvas class="max-h-screen" id="urlsChartPastMonth"></canvas>
<canvas class="max-h-screen" id="urlsChartAllTime"></canvas>
<canvas class="max-h-screen" id="countryChart"></canvas>
<canvas class="max-h-screen" id="deviceTypesChart"></canvas>
<canvas class="max-h-screen" id="organizationChart"></canvas>