<!-- <script context="module">
	import { options } from './../../../.svelte-kit/generated/server/internal.js';
	import { MetaTags } from 'svelte-meta-tags';
	import { asciiLogo } from './../../lib/js/config.js';
	export const prerender = true
</script> -->
<script lang="ts">
  export let data;

  import type { StdlibType, CommandType, CommandsType } from "./types.ts";

  import { onMount } from "svelte";
  import { page } from "$app/stores"; 
  import { MetaTags } from "svelte-meta-tags";
  import Fuse from "fuse.js";
  import axios from "axios";

  import { playSound } from "./functions.js";
  import { lore } from "./lore.js";
  import { dateTime, history } from "./stores.js";
  import { latestVersion } from "$lib/js/version";
  import { parseFlags } from "./args.js";
  import "./style.css";

  const user = "root";
  const machine = $page.url.host || "localhost";

  let lineData = [];
  let histIndex = $history.length;
  let showInput = true;

  let termInput;
  let terminalContainer;

  let inputMode = "default";

  function enter() {
    let command = termInput.value;
    lineData = [...lineData, { command: command, type: "input" }];
    if (inputMode === "default") {
      handle(command);
    }
    if (inputMode === "confirmExec" && data.commandToRun) {
      if (command == "CONFIRM" || command == "confirm") {
        handle(data.commandToRun);
      } else {
        print("Not running");
      }
      inputMode = "default";
    }
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

  function handleKeypress(e) {
    switch (e.key) {
      case "ArrowUp":
        arrowUp();
        break;
      case "ArrowDown":
        arrowDown();
        break;
      case "Enter":
        enter();
        break;
    }
  }

  function print(...args) {
    // Concatenate all arguments into a single string with newlines
    lineData = [...lineData, { output: args.join("\n"), type: "output" }];
    scroll(0);

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
      const options = { keys: ["name"] };
      const fuse = new Fuse(commands, options);
      const result = fuse.search(command);

      let response = `Command '${command}' not found.`;

      if (result.length > 0) {
        response += ` Did you mean ${result[0].item.name}?`;
      }

      response += `\nType 'list' to see a list of available commands.`;
      // Return a message indicating that the command was not found
      return print(response);
    }
  };

  function createHiddenCommand(name: string, description: string) {
    return {
      name: name,
      description: description,
      long_description: description,
      usage: name,
      hidden: true,
      execute: () => {
        return print(description);
      },
    };
  }

  let hiddenCommands = lore.map((item) =>
    createHiddenCommand(item.name, item.text)
  );

  let stdlib: StdlibType = {
    print: print,
    lineData: lineData,
    setLineData: (array: any[]) => {
      lineData = array;
    },
  };

  let commands: CommandsType = [
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
        // Sort the commands alphabetically by name
        const sortedCommands = commands.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        // Use map to create an array of command descriptions
        const commandDescriptions = sortedCommands
          .filter((command) => !command.hidden)
          .map((command) => {
            return `- ${command.name}: ${command.description} Usage: '${command.usage}'`;
          });
        // Join the array into a single string and return it
        return print(commandDescriptions.join("\n"));
      },
    },
    {
      name: "tsil",
      description: "sdnammoc elbaliava tsil",
      long_description: "yrotanalpxe fles ytterP",
      usage: "tsil",
      hidden: true,
      execute: () => {
        // Sort the commands alphabetically by name
        const sortedCommands = commands.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        // Use map to create an array of command descriptions
        const commandDescriptions = sortedCommands.map((command) => {
          return `- ${command.name}`;
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
        "Neofetch like info.",
      usage: "fetch",
      hidden: false,
      execute: async () => {
        const module = await import("./commands/fetch");

        module.main(print, showInput, machine);
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
              latestVersion.id +
              " " +
              latestVersion.name,
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
      long_description:
        "Fetches a javascript file from a url and executes it. Don't forget about the horrible curse that has been cast on all browsers, CORS.",
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
      long_description: "ping a website",
      usage: "httping [url]",
      hidden: false,
      execute: async (args) => {
        showInput = false;
        const module = await import("./commands/httping");

        const options = {
          url: args[0],
          timeout: args[1],
        };

        await module.main(print, options);
        showInput = true;
      },
    },
    {
      name: "joke",
      description: "Outputs a random joke",
      long_description:
        "Outputs a random joke.\n" +
        "Available flags are:\n" +
        "-spicy [bool] | Enables spicy mode",
      usage: "joke [category] <flags>",
      hidden: false,
      execute: async (args) => {
        const module = await import("./commands/joke");

        let options = {};

        if (args.length !== 0) {
          let flags = await parseFlags(args);

          options = {
            category: flags.args[0] || "all",
            spicyMode: flags.flags.spicy === "true",
          };
        }

        await module.default(print, options);
      },
    },
    {
      name: "prime",
      description: "Prints all primes up to a given number",
      long_description: "Prints all primes up to a given number",
      usage: "prime [number]",
      hidden: false,
      execute: async (args) => {
        const module = await import("./commands/prime");

        let options = {};

        options = {
          number: args[0],
        };

        await module.default(stdlib, options);
      },
    },
    {
      name: "bad-apple",
      description: "",
      long_description: "",
      usage: "bad-apple",
      hidden: false,
      execute: async (args) => {
        const module = await import("./commands/apple");

        let options = {};

        if (args.length !== 0) {
          let flags = await parseFlags(args);

          options = {
            speed: flags.args[0] || 1,
          };
        }

        await module.default(stdlib, options);
      },
    },
  ];

  if (data.commandToRun) {
    inputMode = "confirmExec";
    print(
      `\nYou entered a special url which will automatically run the command '${data.commandToRun}'.\n` +
        `Please CONFIRM or DENY`
    );
  }

  onMount(() => {
    termInput.focus();
  });
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
  on:click={() => {
    if (window.getSelection().toString() === "") {
      termInput.focus();
    }
  }}
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
      {:else if line.type === "output"}
        <pre class="output whitespace-pre-wrap">{line.output}</pre>
      {:else if line.type === "outputHtml"}
        {@html line.output}
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
        on:keydown={handleKeypress}
      />
    </div>
  {/if}
  <div class="clock">{$dateTime}</div>
</div>
<div class="scanline"></div>
