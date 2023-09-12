<script>
    import { onMount } from "svelte";
    let headline = "Nedtelling til Kukfest 23.1", countdownVisible = true, contentVisible = false;

    let days = "00", hours = "00", minutes = "00", seconds = "00"

    onMount(() => {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let today = new Date();
        let yyyy = today.getFullYear();
        let monthDay = "10/16/";
        let time = "16:16:00";
        let date = monthDay + yyyy + " " + time;

        const countDown = new Date(date).getTime(),
            x = setInterval(function () {
                const now = new Date().getTime(),
                    distance = countDown - now;

                days = Math.floor(distance / day);
                hours = Math.floor((distance % day) / hour);
                minutes = Math.floor((distance % hour) / minute);
                seconds = Math.floor((distance % minute) / second);

                //do something later when date is reached
                if (distance < 0) {
                    headline = "Kukfest skjer nå!";
                    countdownVisible = false;
                    contentVisible = true;
                    clearInterval(x);
                }
                //seconds
            }, 0);
    });
</script>


<div class="container">
    <h1>{headline}</h1>
    {#if countdownVisible}
    <div id="countdown">
        <ul>
            <li><span>{days}</span>days</li>
            <li><span>{hours}</span>Hours</li>
            <li><span>{minutes}</span>Minutes</li>
            <li><span>{seconds}</span>Seconds</li>
        </ul>
    </div>
    {/if}
    {#if contentVisible}
    <div id="content" class="emoji">
        <span>🥳</span>
        <span>🎉</span>
        <span>🎂</span>
    </div>
    {/if}
</div>

<style>
    /* general styling */
    :root {
        --smaller: 0.75;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body {
        height: 100%;
        margin: 0;
    }

    body {
        align-items: center;
        background-color: #ffffff;
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

    .container {
        color: #000000;
        margin: 0 auto;
        text-align: center;
    }

    h1 {
        font-weight: normal;
        letter-spacing: 0.125rem;
        text-transform: uppercase;
    }

    li {
        display: inline-block;
        font-size: 1.5em;
        list-style-type: none;
        padding: 1em;
        text-transform: uppercase;
    }

    li span {
        display: block;
        font-size: 4.5rem;
    }

    .emoji {
        display: none;
        padding: 1rem;
    }

    .emoji span {
        font-size: 4rem;
        padding: 0 0.5rem;
    }

    @media all and (max-width: 768px) {
        h1 {
            font-size: calc(1.5rem * var(--smaller));
        }

        li {
            font-size: calc(1.125rem * var(--smaller));
        }

        li span {
            font-size: calc(3.375rem * var(--smaller));
        }
    }
</style>
