<script>
    import { onMount } from "svelte";
    import PocketBase from "pocketbase";
    //import { Chart } from 'chart.js';
    import Chart from 'chart.js/auto';

    let data = [];
    let user = "";
    let pass = "";
    let chart;

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

        data.forEach(visit => {
            const date = new Date(visit.unix);
            const day = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD

            if (!visitsByDay[day]) {
                visitsByDay[day] = 0;
            }

            visitsByDay[day]++;
        });

        // Convert the visitsByDay object to arrays for use with Chart.js
        const labels = Object.keys(visitsByDay);
        const values = Object.values(visitsByDay);

        const ctx = document.getElementById('visitsChart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'bar',
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
                    type: 'linear', // Explicitly set the scale type to 'linear'
                    beginAtZero: true
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

<canvas id="visitsChart"></canvas>