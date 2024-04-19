<!-- <script context="module">
	import { asciiLogo } from './../../lib/js/config.js';
	export const prerender = true
</script> -->
<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { keypress } from "./actions.js";
  import { dateTime, history } from "./stores.js";
  import { getLatestVersion } from "$lib/js/lib.js";
  import { asciiLogo } from "$lib/js/config.js";
  import "./style.css";

  const user = "root";
  const machine = $page.url.host || "localhost";

  let lineData = [];
  let histIndex = $history.length;
  let showInput = true;

  let termInput;

  function enter() {
    let command = termInput.value;
    lineData = [...lineData, { command: command, type: "input" }];
    handle(command);
    termInput.value = "";

    if (
      command === "" ||
      /^[ ]+$/.test(command) ||
      $history[$history.length - 1] === command
    )
      return;

    $history[$history.length] = command;
    histIndex = $history.length;
  }

  function arrowUp() {
    if (histIndex === 0) return;

    histIndex--;
    termInput.value = $history[histIndex];
  }

  function arrowDown() {
    if (histIndex < $history.length - 1) {
      histIndex++;
      termInput.value = $history[histIndex];
    } else {
      histIndex = $history.length;
      termInput.value = "";
    }
  }

  onMount(() => {
    termInput.focus();
  });

  function print(...args) {
    // Concatenate all arguments into a single string with newlines
    lineData = [...lineData, { output: args.join("\n"), type: "output" }];
  }

  function print2() {
    const args = [...arguments];
    return args.map((text) => `<pre class="output">${text}</pre>`);
  }

  function printWithColor(text, color) {
    return `<pre class="output" style="color: ${
      color ?? "inherit"
    };">${text}</pre>`;
  }

  const handle = (text) => {
    const [command, ...args] = text.trim().split(" ");
    // Find the command in the commands array
    const foundCommand = commands.find((cmd) => cmd.name === command);
    if (foundCommand) {
      // Execute the found command
      return foundCommand.execute(args);
    } else {
      // Return a message indicating that the command was not found
      return print(
        `Command '${command}' not found. Type 'list' for all commands.`
      );
    }
  };

  function createHiddenCommand(name, description) {
    return {
      name: name,
      hidden: true,
      execute: () => {
        return print(description);
      },
    };
  }

  let hiddenCommands = [
    createHiddenCommand(
      "kukfest",
      "Kukfest was the old name of Blålange festivalen, it was changed in 2024 in order to be more including and less offensive."
    ),
    createHiddenCommand(
      "23",
      "23 was the first festival hosted, it happened on a minecraft server."
    ),
    createHiddenCommand(
      "23.1",
      "23.1 was the second festival hosted, it happened on a minecraft server and was smaller than 23."
    ),
    createHiddenCommand(
      "herremann",
      "Creates logos and helps plan out the festival. Has a very large ego and does not help with the site."
    ),
    createHiddenCommand(
      "boofdev",
      "Lead developer of blålange festivalen. Helps plan out the festival."
    ),
    createHiddenCommand(
      "celvin",
      "VIP guest, can clap vrry fast and is very helpful."
    ),
    createHiddenCommand(
      "vincent",
      "VIP guest, really nice guy who is going to do a silly little dance at Blålange festivalen 24."
    ),
  ];

  let commands = [
    ...hiddenCommands,
    {
      name: "ping",
      description: "ping pong",
      usage: "ping",
      hidden: false,
      execute: () => {
        return print("pong");
      },
    },
    {
      name: "list",
      description: "list available commands",
      usage: "list",
      hidden: false,
      execute: () => {
        // Use map to create an array of command descriptions
        const commandDescriptions = commands
          .filter((command) => !command.hidden)
          .map((command) => {
            return `- ${command.name}: ${command.description} Usage: '${command.usage}'`;
          });
        // Join the array into a single string and return it
        return print(commandDescriptions.join("\n"));
      },
    },
    {
      name: "echo",
      description: "echo text",
      usage: "echo [text]",
      hidden: false,
      execute: (args) => {
        return print(args.join(" "));
      },
    },
    {
      name: "fetch",
      description: "for that arch linux flex",
      usage: "fetch",
      hidden: false,
      execute: () => {
        return fetch();
      },
    },
    {
      name: "help",
      description: "Print help",
      usage: "help",
      hidden: false,
      execute: () => {
        let text = [
          "Blålange festivalen blåsh, version " +
            getLatestVersion().id +
            " " +
            getLatestVersion().name,
          "These shell commands are defined internally.  Type `help' to see this list.",
          "To view available commands, type `list'.",
        ];
        return print(...text);
      },
    },
    {
      name: "clear",
      description: "clear terminal",
      usage: "clear",
      hidden: false,
      execute: () => {
        lineData = [];
      },
    },
  ];

  async function fetch() {
    showInput = false;
    try {
      let screenWidth = window.screen.width || window.innerWidth;
      let screenHeight = window.screen.height || window.innerHeight;
      let memory = navigator.deviceMemory;
      let useragent = navigator.userAgent;
      let info = [
        "OS: BlålangeOS " + (getLatestVersion().id || ""),
        "Host: " + machine,
        "Shell: blåsh",
        "CPU: Blåchip Kosinus-9 (4) 1.094GHz",
        "Resolution: " + screenWidth + "x" + screenHeight,
        "Memory: " + (memory || "?") + "GB",
        "Useragent: " + useragent,
      ];

      let output = [];

      for (let i = 0; i < asciiLogo.length; i++) {
        if (i < info.length) {
          output.push(asciiLogo[i] + info[i]);
        } else {
          output.push(asciiLogo[i]);
        }
      }

      // print one line every 50ms
      for (let i = 0; i < output.length; i++) {
        print(output[i] + "\n");
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    } catch (error) {
      print(error);
    }

    showInput = true;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="terminal crt ibm-bios" on:click={() => termInput.focus()}>
  <pre class="output">Welcome to Blåsh</pre>
  <pre class="output">Type 'help' to learn more.</pre>
  {#each lineData as line, i (i)}
    <span>
      {#if line.type === "input"}
        <p class="prompt">{user}@{machine}:$&nbsp;</p>
        <pre class="input-old">{line.command}</pre>
        <br />
      {:else if typeof line.output === "string"}
        <pre class="output">{line.output}</pre>
      {:else}
        {#each line.output as out}
          {@html out}
        {/each}
      {/if}
    </span>
  {/each}
  {#if showInput}
    <p class="prompt">{user}@{machine}:$&nbsp;</p>
    <input
      class="input"
      type="text"
      spellcheck="false"
      bind:this={termInput}
      use:keypress
      on:enterkey={enter}
      on:arrowup|preventDefault={arrowUp}
      on:arrowdown|preventDefault={arrowDown}
    />
  {/if}
  <div class="clock">{$dateTime}</div>
</div>
<div class="scanline"></div>
