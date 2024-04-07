// Import required modules
import fs from 'fs';
import path from 'path';

// Function to append the version and set the name
function appendVersionAndSetName(newVersion, newName) {
    // Define the path to the config.json file
    const configPath = path.join(__dirname, './src/lib/json/config.json');

    // Read the config.json file
    fs.readFile(configPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Parse the JSON data
        let config = JSON.parse(data);

        // Get the latest version
        const latestVersion = config.versions[config.versions.length - 1].id;

        // Split the latest version into parts
        const latestVersionParts = latestVersion.split('.').map(Number);

        // Split the new version into parts
        const newVersionParts = newVersion.split('.').map(Number);

        // Append the new version to the latest version
        const appendedVersionParts = [
            latestVersionParts[0] + newVersionParts[0],
            latestVersionParts[1] + newVersionParts[1],
            latestVersionParts[2] + newVersionParts[2]
        ];

        // Convert the appended version parts back to a string
        const appendedVersion = appendedVersionParts.join('.');

        // Use the name of the last version if a new name is not provided
        const finalName = newName || config.versions[config.versions.length - 1].name;

        // Add the new version to the versions array
        config.versions.push({
            id: appendedVersion,
            name: finalName
        });

        // Convert the updated config back to JSON
        const updatedConfig = JSON.stringify(config, null, 2);

        // Write the updated config back to the file
        fs.writeFile(configPath, updatedConfig, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }

            console.log('Version appended successfully to', appendedVersion);
            console.log('Name set to', finalName);
            if (newName && newVersionParts[0] == 0 && newVersionParts[1] == 0) {
                console.log('The name should only be changed every major and minor versions, not patches.');
            }
            if (!newName && newVersionParts[0] > 0 || !newName && newVersionParts[1] > 0) {
                console.log('The name should be changed every major and minor versions.');
            }
        });
    });
}

// Check if a version number was provided
if (process.argv.length < 3) {
    console.error('Please provide a new version number as an argument.');
    process.exit(1);
}

let __dirname = process.cwd();

// Get the new version number and name from the command line arguments
const newVersion = process.argv[2];
const newName = process.argv[3]; // This is now optional

// Append the version and set the name
appendVersionAndSetName(newVersion, newName);