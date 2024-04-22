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

    // Get current unix time
    let now = Date.now();

    // Send request
    try {
        let jsonBody = {
            url: options.url,
        }
        let response = await axios.post(`https://blalange.org/api/httping`, jsonBody, {timeout: options.timeout});
        let responseJson = response.data;
        print("Response time: " + responseJson.timeTaken + "ms");
        print("Status code: " + responseJson.statuscode);
    } catch (error) {
        print("Error: " + error.message);
    }

}