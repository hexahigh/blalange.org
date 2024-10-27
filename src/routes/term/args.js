/**
 * Parses the command line arguments and extracts the flags and non-flag arguments.
 *
 * @param {Array} args - The command line arguments to be parsed.
 * @return {Object} - An object containing the parsed flags and non-flag arguments.
 */
export async function parseFlags(args) {

    let flags = {};
    let outArgs = [];
    
    for (let i = 0; i < args.length; i++) {
        if (args[i].startsWith("-")) {
            // Get the flag name
            let flag = args[i].slice(1);
            // Get the flag value
            let value = args[i + 1];

            flags[flag] = value;
            i++;
        } else {
            outArgs.push(args[i]);
        }
    }

    return {
        flags: flags,
        args: outArgs
    }
}