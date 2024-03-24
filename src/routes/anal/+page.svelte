<script>
    import { onMount } from "svelte";
    import PocketBase from "pocketbase";
    import Chart from 'chart.js/auto';

    let data = [];
    let user = "";
    let pass = "";
    let chartVisits;
    let chartUrls;

    async function getData() {
        const pb = new PocketBase("https://db.080609.xyz");
        data = await pb.collection("kf_analytics").getFullList(200 /* batch size */, {
            sort: "-created",
        });
        data = data.map(item => {
            return item;
        });
    }

    async function auth() {
        const pb = new PocketBase("https://db.080609.xyz");
        await pb.collection("users").authWithPassword(user, pass);
    }

    function renderChart() {
        const visitsByDay = {};
        const urlsByVisits = {};
        const now = new Date();
        const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

        data.forEach(visit => {
            const date = new Date(visit.unix);
            const day = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD

            if (!visitsByDay[day]) {
                visitsByDay[day] = 0;
            }
            visitsByDay[day]++;

            // Process URL data
            if (!urlsByVisits[visit.url]) {
                urlsByVisits[visit.url] = 0;
            }
            urlsByVisits[visit.url]++;
        });

        // Prepare data for the visits chart
        const labels = Object.keys(visitsByDay);
        const values = Object.values(visitsByDay);

        // Create the visits chart
        const ctxVisits = document.getElementById('visitsChart').getContext('2d');
        chartVisits = new Chart(ctxVisits, {
            type: 'bar', // You can choose the type of chart you prefer
            data: {
                labels: labels,
                datasets: [{
                    label: 'Visits',
                    data: values,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Visits per Day'
                    }
                }
            }
        });


        // Filter URLs visited in the past month and only include those containing "https://blalange.org"
        const urlsPastMonth = Object.entries(urlsByVisits).filter(([url, visits]) => {
            const visitDate = new Date(data.find(d => d.url === url).unix);
            return visitDate >= oneMonthAgo && url.includes("https://blalange.org") && visits >= 2;
        });

        // Create the URLs chart for the past month
        const ctxUrlsPastMonth = document.getElementById('urlsChartPastMonth').getContext('2d');
        chartUrls = new Chart(ctxUrlsPastMonth, {
            type: 'pie',
            data: {
                labels: urlsPastMonth.map(([url]) => url),
                datasets: [{
                    data: urlsPastMonth.map(([, visits]) => visits),
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Most Visited URLs in the Past Month'
                    }
                }
            }
        });

        // Filter URLs for all time and only include those containing "https://blalange.org"
        const urlsAllTime = Object.entries(urlsByVisits).filter(([url, visits]) => {
            return url.includes("https://blalange.org") && visits >= 2;
        });

        // Create the URLs chart for all time
        const ctxUrlsAllTime = document.getElementById('urlsChartAllTime').getContext('2d');
        new Chart(ctxUrlsAllTime, {
            type: 'pie',
            data: {
                labels: urlsAllTime.map(([url]) => url),
                datasets: [{
                    data: urlsAllTime.map(([, visits]) => visits),
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Most Visited URLs All Time'
                    }
                }
            }
        });
    }
</script>

<div class="border border-black w-max">
    <input bind:value={user} placeholder="user" class="w-10" />
    <input bind:value={pass} placeholder="pass" class="w-10" type="password" />
    <button on:click={auth}>Auth</button>
    <button on:click={getData} class="ml-6">Get data</button>
    <button on:click={renderChart}>Render</button>
</div>

<canvas class="max-h-screen" id="visitsChart"></canvas>
<canvas class="max-h-screen" id="urlsChartPastMonth"></canvas>
<canvas class="max-h-screen" id="urlsChartAllTime"></canvas>