<!-- <script context="module">
	export const prerender = true
</script> -->
<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { keypress } from "./actions.js";
  import { dateTime, history } from "./stores.js";
  import "./style.css";

  const user = "blålange";
  const machine = $page.url.host || "localhost";

  let lineData = [];
  let histIndex = $history.length;

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
      return print(`Command '${command}' not found. Type 'list' for all commands.`)
    }
  };

  let commands = [
    {
      name: "ping",
      description: "ping pong",
      usage: "ping",
      hidden: false,
      execute: () => {
        return print("pong")
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
		return print(commandDescriptions.join("\n"))
      },
    },
    {
      name: "echo",
      description: "echo text",
      usage: "echo [text]",
      hidden: false,
      execute: (args) => {
		return print(args.join(" "))
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
  ];

  function fetch() {
    let output = [
      "OS: BlålangeOS",
      "Host: blalange.org",
      "Shell: blåsh",
      "CPU: Blåchip Kosinus-9 (4) 1.094GHz",
    ];

    return print(...output);
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="terminal crt min-h-screen" on:click={() => termInput.focus()}>
  <pre class="output">Type 'help' to learn more.</pre>
  {#each lineData as line, i (i)}
    <span>
      {#if line.type === "input"}
	  <p class="prompt">{user}@{machine}:$&nbsp;</p>
        <pre class="input-old">{line.command}</pre>
        <br />
      {:else}
        {#if typeof line.output === "string"}
          <pre class="output">{line.output}</pre>
        {:else}
          {#each line.output as out}
            {@html out}
          {/each}
        {/if}
      {/if}
    </span>
  {/each}
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
</div>
<div class="clock">{$dateTime}</div>
