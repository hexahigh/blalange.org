<script>
  import { onMount } from "svelte";

  let terminalContainer;
  let term;
  var curr_line = "";
  var entries = [];
  var currPos = 0;
  var pos = 0;

  const commands = {
    echo: (args) => args.join(" "),
    ls: () => ["file1", "file2", "dir"].join("\n"),
    clear: () => term.reset(),
    // Add more commands here
  };

  async function initTerminal() {
    const { Terminal } = await import("xterm");
    term = new Terminal();
    //term.open(terminalContainer);
    term.open(document.getElementById('terminal'));
    term.prompt = () => {
      term.write("\n\r" + curr_line + "\r\n\u001b[32m~$>> \u001b[37m");
    };
    term.write("#Terminal");
    term.prompt();

    term.onKey(function (key) {
      const printable =
        !key.altKey &&
        !key.altGraphKey &&
        !key.ctrlKey &&
        !key.metaKey &&
        !(key.key === " " && term._core.buffer.x < 6);
      if (key.key === "\r") {
        // Enter key
        if (curr_line.replace(/^\s+|\s+$/g, "").length != 0) {
          // Check if string is all whitespace
          entries.push(curr_line);
          currPos = entries.length - 1;
          term.prompt();
        } else {
          term.write("\n\x1b[2K\r\u001b[32m~$>> \u001b[37m");
        }
        curr_line = "";
      } else if (key.key === "\x7F") {
        // Backspace\
        if (term._core.buffer.x > 5) {
          curr_line =
            curr_line.slice(0, term._core.buffer.x - 6) +
            curr_line.slice(term._core.buffer.x - 5);
          pos = curr_line.length - term._core.buffer.x + 6;
          term.write("\x1b[2K\r\u001b[32m~$>> \u001b[37m" + curr_line);
          term.write("\x1b[".concat(pos.toString()).concat("D")); //term.write('\033[<N>D');
          if (
            term._core.buffer.x == 5 ||
            term._core.buffer.x == curr_line.length + 6
          ) {
            term.write("\x1b[1C");
          }
        }
      } else if (key.key === "\x1B[A") {
        // Up arrow
        if (entries.length > 0) {
          if (currPos > 0) {
            currPos -= 1;
          }
          curr_line = entries[currPos];
          term.write("\x1b[2K\r\u001b[32m~$>> \u001b[37m" + curr_line);
        }
      } else if (key.key === "\x1B[B") {
        // Down arrow
        currPos += 1;
        if (currPos === entries.length || entries.length === 0) {
          currPos -= 1;
          curr_line = "";
          term.write("\x1b[2K\r\u001b[32m~$>> \u001b[37m");
        } else {
          curr_line = entries[currPos];
          term.write("\x1b[2K\r\u001b[32m~$>> \u001b[37m" + curr_line);
        }
      } else if (
        printable &&
        !(key.key === "\x1B[C" && term._core.buffer.x > curr_line.length + 4)
      ) {
        if (key.key != "\x1B[D" && key.key != "\x1B[C") {
          var input = key.key;
          if (key.key == "\t") {
            // Tab
            input = "    ";
          }
          curr_line += input;
          term.write(input);
          // pos = curr_line.length - term._core.buffer.x + 4;
          // curr_line = [curr_line.slice(0, term._core.buffer.x - 5), input, curr_line.slice(term._core.buffer.x - 5)].join('');
          // term.write('\33[2K\r\u001b[32m~$>> \u001b[37m' + curr_line);
          // term.write('\033['.concat(pos.toString()).concat('D')); //term.write('\033[<N>D');
        } else {
          term.write(key.key);
        }
      }
    });
  }

  onMount(initTerminal);
</script>

<div
  bind:this={terminalContainer}
  class="table-responsive codeRunCon"
  id="codeRunCon"
>
  <div id="terminal"></div>
</div>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    /*overflow: hidden; didn't work*/
    margin: 0; /* add this */
  }

  .codeRunCon {
    display: flex;
    position: fixed;
    right: 0%;
    bottom: 0%;
    width: 100%;
    height: 80%;
    background-color: inherit;
  }

  .codeRunCon #terminal {
    display: flex;
    position: absolute;
    /* top: 20px; */ /* change this */
    bottom: 0; /* to this */
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: #000000;
  }

  .xterm {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    font-feature-settings: "liga" 0;
    position: relative;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  .xterm.focus,
  .xterm:focus {
    outline: none;
  }

  .xterm .xterm-helpers {
    position: absolute;
    top: 0;
    /**
     * The z-index of the helpers must be higher than the canvases in order for
     * IMEs to appear on top.
     */
    z-index: 5;
  }

  .xterm .xterm-helper-textarea {
    /*
     * HACK: to fix IE's blinking cursor
     * Move textarea out of the screen to the far left, so that the cursor is not visible.
     */
    border: 0px;
    position: absolute;
    opacity: 0;
    left: -9999em;
    top: 0;
    width: 0;
    height: 0;
    z-index: -5;
    /** Prevent wrapping so the IME appears against the textarea at the correct position */
    white-space: nowrap;
    overflow: hidden;
    resize: none;
  }

  .xterm .composition-view {
    /* TODO: Composition position got messed up somewhere */
    background: #000;
    color: #fff;
    display: none;
    position: absolute;
    white-space: nowrap;
    z-index: 1;
  }

  .xterm .composition-view.active {
    display: block;
  }

  .xterm .xterm-viewport {
    /* On OS X this is required in order for the scroll bar to appear fully opaque */
    background-color: #000;
    overflow-y: scroll;
    cursor: default;
    position: absolute;
    right: -20px;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
  }

  .xterm-viewport::-webkit-scrollbar {
    background-color: var(--dark);
    width: 5px;
  }

  .xterm-viewport::-webkit-scrollbar-thumb {
    background: var(--highlight);
  }

  .xterm .xterm-screen {
    position: relative;
    width: 100% !important;
    height: 100% !important;
  }

  .xterm .xterm-screen canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100% !important;
    height: 100% !important;
  }

  .xterm .xterm-scroll-area {
    visibility: hidden;
  }

  .xterm-char-measure-element {
    display: inline-block;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: -9999em;
    line-height: normal;
  }

  .xterm {
    cursor: text;
  }

  .xterm.enable-mouse-events {
    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */
    cursor: default;
  }

  .xterm.xterm-cursor-pointer {
    cursor: pointer;
  }

  .xterm.column-select.focus {
    /* Column selection mode */
    cursor: crosshair;
  }

  .xterm .xterm-accessibility,
  .xterm .xterm-message {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    color: transparent;
  }

  .xterm .live-region {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .xterm-dim {
    opacity: 0.5;
  }

  .xterm-underline {
    text-decoration: underline;
  }
</style>
