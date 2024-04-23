<!-- <script context="module">
	import { MetaTags } from 'svelte-meta-tags';
	import { asciiLogo } from './../../lib/js/config.js';
	export const prerender = true
</script> -->
<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { keypress } from "./actions.js";
  import { playSound } from "./functions.js";
  import { lore } from "./lore.js";
  import { dateTime, history } from "./stores.js";
  import { getLatestVersion } from "$lib/js/lib.js";
  import { MetaTags } from "svelte-meta-tags";
  import axios from "axios";
  import "./style.css";

  const user = "root";
  const machine = $page.url.host || "localhost";

  let lineData = [];
  let histIndex = $history.length;
  let showInput = true;

  let termInput;
  let terminalContainer;

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

    setInterval(() => {
      if (termInput) {
        termInput.focus();
      }
    }) * 100;
  });

  function print(...args) {
    // Concatenate all arguments into a single string with newlines
    lineData = [...lineData, { output: args.join("\n"), type: "output" }];
    scroll();

    // We call scroll again to ensure that the new lines are visible
    scroll(100);
  }

  async function scroll(wait) {
    await new Promise((resolve) => setTimeout(resolve, wait || 0));
    if (terminalContainer) {
      terminalContainer.scrollTop = terminalContainer.scrollHeight;
    }
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

  let hiddenCommands = lore.map(item => createHiddenCommand(item.name, item.text));

  let commands = [
    ...hiddenCommands,
    {
      name: "ping",
      description: "ping pong",
      long_description: "ping pong bing bong",
      usage: "ping",
      hidden: false,
      execute: () => {
        return print("pong");
      },
    },
    {
      name: "list",
      description: "list available commands",
      long_description: "Pretty self explanatory",
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
      long_description: "Have you ever used a terminal?",
      usage: "echo [text]",
      hidden: false,
      execute: (args) => {
        return print(args.join(" "));
      },
    },
    {
      name: "fetch",
      description: "for that arch linux flex",
      long_description:
        "Neofetch like info. No i will not remove the teletyping sound effects, deal with it",
      usage: "fetch",
      hidden: false,
      execute: async () => {
        const module = await import("./commands/fetch");

        module.main(print, playSound, showInput, machine);
      },
    },
    {
      name: "help",
      description: "Print help for a command",
      long_description:
        "Prints help for a command. Did you really need to know that?",
      usage: "help [command]",
      hidden: false,
      execute: (args) => {
        if (args.length === 0) {
          let text = [
            "Blålange festivalen blåsh, version " +
              getLatestVersion().id +
              " " +
              getLatestVersion().name,
            "Use `help <command>' for more information on a command.",
            "To view available commands, type `list'.",
          ];
          return print(...text);
        } else {
          const command = commands.find((command) => command.name === args[0]);
          if (command) {
            let text = [
              `${command.name}: ${command.description}`,
              `Usage: ${command.usage}`,
              `Description: ${command.long_description || ""}`,
            ];
            return print(...text);
          } else {
            return print("Command not found");
          }
        }
      },
    },
    {
      name: "clear",
      description: "Clears the terminal",
      long_description: "Pretty self explanatory",
      usage: "clear",
      hidden: false,
      execute: () => {
        lineData = [];
      },
    },
    {
      name: "exec",
      description: "execute javascript",
      long_description:
        "Executes javascript. " +
        "You can use this to create your own commands. However, you should use execfetch if you are making something big. " +
        "I was even nice enough to pass a few functions to it. This means you can use functions like print() directly in your code." +
        "\n\nThe full list of functions passed is: \n" +
        "- print(string) | prints a string\n\n" +
        "- playSound(sound) | plays a sound, you can use a url or a blob\n\n" +
        "You can read more about this at https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function",
      usage: "exec [command]",
      hidden: false,
      execute: (args) => {
        showInput = false;
        try {
          const func = new Function("print", "playSound", args.join(" "));
          func(print, playSound);
        } catch (e) {
          print(e);
        }
        showInput = true;
      },
    },
    {
      name: "execfetch",
      description: "fetches a javascript file from a url and executes it",
      usage: "execfetch [url]",
      hidden: false,
      execute: (args) => {
        if (!args[0]) {
          print("No url provided");
          return;
        }
        showInput = false;
        try {
          axios
            .get(args[0])
            .then((response) => {
              // Find the 'exec' command object
              const execCommand = commands.find((cmd) => cmd.name === "exec");
              if (execCommand) {
                // Call the 'exec' command's execute method with the fetched code
                execCommand.execute([response.data]);
              } else {
                print("Error: 'exec' command not found.");
              }
            })
            .catch((error) => {
              print(error);
            });
        } catch (e) {
          print(e);
        }
        showInput = true;
      },
    },
    {
      name: "httping",
      description: "ping a website",
      usage: "httping [url]",
      hidden: false,
      execute: async (args) => {
		showInput = false;
        const module = await import("./commands/httping");

		const options = {
			url: args[0],
			timeout: args[1]
		};

        await module.main(print, options);
		showInput = true;
      },
    },
  ];
</script>

<MetaTags
  title="Terminal"
  titleTemplate="%s | Blålange"
  description="BlålangeOS"
  canonical="https://blalange.org/term"
  openGraph={{
    url: "https://blalange.org/term",
    title: "Terminal | Blålange",
    description: "BlålangeOS",
    siteName: "Blålange festivalen",
  }}
/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="terminal crt ibm-bios flex flex-col items-start"
  on:click={() => termInput.focus()}
  bind:this={terminalContainer}
>
  <pre class="output">Welcome to Blåsh</pre>
  <pre class="output">Type 'help' to learn more.</pre>
  {#each lineData as line, i (i)}
    <span>
      {#if line.type === "input"}
        <p class="prompt">{user}@{machine}:$&nbsp;</p>
        <pre class="input-old">{line.command}</pre>
        <br />
      {:else if typeof line.output === "string"}
        <pre class="output whitespace-pre-wrap">{line.output}</pre>
      {:else}
        {#each line.output as out}
          {@html out}
        {/each}
      {/if}
    </span>
  {/each}
  {#if showInput}
  <div class="flex items-center">
    <p class="prompt mr-auto">{user}@{machine}:$&nbsp;</p>
    <input
      class="input flex-grow"
      type="text"
      spellcheck="false"
      bind:this={termInput}
      use:keypress
      on:enterkey={enter}
      on:arrowup|preventDefault={arrowUp}
      on:arrowdown|preventDefault={arrowDown}
    />
  </div>
  {/if}
  <div class="clock">{$dateTime}</div>
</div>
<div class="scanline"></div>
