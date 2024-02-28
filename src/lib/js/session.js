export function getSessionId() {  
    console.log("I was run!")
    // Check if a session ID already exists in local storage
    let sessionId = localStorage.getItem('sessionId');

    // If no session ID exists, generate a new one and store it
    if (!sessionId) {
        sessionId = generateUniqueId();
        localStorage.setItem('sessionId', sessionId);
    }

    return sessionId;
}

function generateUniqueId() {
    // Generate a unique ID using a combination of Date.now() and Math.random()
    return 'session-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}