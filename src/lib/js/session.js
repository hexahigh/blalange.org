export function getSessionId() {  
    // Check if a session ID already exists in local storage
    let sessionId = sessionStorage.getItem('sessionId');

    // If no session ID exists, generate a new one and store it
    if (!sessionId) {
        console.log("No session ID found. Generating a new one.");
        sessionId = generateUniqueId();
        sessionStorage.setItem('sessionId', sessionId);
    } else {
        console.log("Existing session ID found");
    }

    return sessionId;
}

export function getPermanentId() {  
    // Check if a permanent ID already exists in local storage
    let permanentId = localStorage.getItem('permanentId');
    
    // If no permanent ID exists, generate a new one and store it
    if (!permanentId) {
        console.log("No permanent ID found. Generating a new one.");
        permanentId = generateUniqueId();
        localStorage.setItem('permanentId', permanentId);
    } else {
        console.log("Existing permanent ID found");
    }

    return permanentId;
}

function generateUniqueId() {
    // Generate a unique ID using a combination of Date.now() and Math.random()
    return 'session-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}