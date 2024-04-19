import { page } from "$app/stores";

function print() {
  const args = [...arguments];
  return args.map((text) => `<pre class="output">${text}</pre>`);
}

function printWithColor(text, color) {
  return `<pre class="output" style="color: ${
    color ?? "inherit"
  };">${text}</pre>`;
}

export const handle = (text) => {
  const [command, ...args] = text.trim().split(" ");
  // Find the command in the commands array
  const foundCommand = commands.find((cmd) => cmd.name === command);
  if (foundCommand) {
    // Execute the found command
    return foundCommand.execute(args);
  } else {
    // Return a message indicating that the command was not found
    return `Command '${command}' not found. Type 'list' for all commands.`;
  }
};

let commands = [
  {
    name: "ping",
    description: "ping pong",
    usage: "ping",
    hidden: false,
    execute: () => {
      return "pong";
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
      return commandDescriptions.join("\n");
    },
  },
  {
    name: "echo",
    description: "echo text",
    usage: "echo [text]",
    hidden: false,
    execute: (args) => {
      return args.join(" ");
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
  }
];

function fetch () {
    let output = [
        "OS: BlålangeOS",
        "Host: blalange.org",
        "Shell: blåsh",
        "CPU: Blåchip Kosinus-9 (4) 1.094GHz",
    ]

    return print(...output);
}