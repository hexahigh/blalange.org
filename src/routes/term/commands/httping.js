import axios from "axios";

const defaultOptions = {
    url: '',
    timeout: 5000
};

export async function main(print,  inOptions = {}) {
    const options = { ...defaultOptions, ...inOptions };

    if (!options.url) {
        print("No URL provided");
        return;
    }

    let host = "https://blalange.org/api/httping";

    if (typeof window !== "undefined") {
        host = window.location.origin + "/api/httping";
    }

    // Get current unix time
    let now = Date.now();

    if (!options.url.startsWith("http://") && !options.url.startsWith("https://")) {
        // Add http prefix
        options.url = "http://" + options.url;
    }

    // Send request
    try {
        let jsonBody = {
            url: options.url,
        }
        let response = await axios.post(host, jsonBody, {timeout: options.timeout});
        let responseJson = response.data;
        print("Response time: " + responseJson.timeTaken + "ms");
        print("Status code: " + responseJson.statuscode);
    } catch (error) {
        print("Error: " + error.message);
    }

}