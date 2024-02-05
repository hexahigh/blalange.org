<script>
  import { onMount } from "svelte";

  let terminalContainer;
  let term;
  let commandHistory = [];
  let commandIndex = -1;
  let currentInput = "";

  const commands = {
    echo: (args) => args.join(" "),
    ls: () => ["file1", "file2", "dir"].join("\n"),
    clear: () => term.reset(),
    // Add more commands here
  };

  function executeCommand(input) {
    const tokens = input.trim().split(/\s+/);
    const commandName = tokens.shift();
    const args = tokens;

    if (commandName in commands) {
      try {
        const output = commands[commandName](args);
        if (commandName !== "clear") {
          term.writeln(`${output.trim()}`); // Trim output to remove extra spaces
        } else {
          term.writeln(""); // Clear the terminal without trying to trim output
        }
      } catch (error) {
        term.writeln(`\nError executing command: ${error.message}`);
      }
    } else {
      term.writeln(`\nUnknown command: ${commandName}`);
    }

    commandHistory.push(input.trim()); // Trim input to remove extra spaces
    commandIndex = commandHistory.length;
  }

  async function initTerminal() {
    const { Terminal } = await import("xterm");
    term = new Terminal();
    term.open(terminalContainer);
    term.write("$ ");

    term.onKey(({ key, domEvent }) => {
      const key2 = domEvent.key; // Use domEvent.key instead of key
      console.log("Key pressed:", key2);
      console.log("Current input:", currentInput);
      domEvent.preventDefault();
      switch (key2) {
        case "Enter":
          console.log(commandHistory);
          console.log("Trying to run command:", currentInput);
          executeCommand(currentInput);
          currentInput = "";
          term.write("\r\n$ ");
          break;
        case "Backspace":
          if (currentInput === "") {
            // Ignore backspace if there's nothing to delete
            return;
          }
          currentInput = currentInput.slice(0, -1);
          term.write("\b \b");
          break;
        default:
          if (!domEvent.ctrlKey && !domEvent.altKey) {
            currentInput += key;
            term.write(key);
          }
          break;
      }
    });
  }

  onMount(initTerminal);
</script>

<div
  bind:this={terminalContainer}
  class="w-full overflow-auto h-screen bg-black text-white"
></div>
