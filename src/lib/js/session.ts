/**
 * Gets the session ID from session storage. If no session ID exists, generates
 * a new one and stores it.
 *
 * @returns {string} The session ID.
 */
export function getSessionId(): string {  
    // Check if a session ID already exists in local storage
    let sessionId = sessionStorage.getItem('sessionId');

    // If no session ID exists, generate a new one and store it
    if (!sessionId) {
        sessionId = generateUniqueId("session");
        sessionStorage.setItem('sessionId', sessionId);
    }

    return sessionId;
}

/**
 * Retrieves a persistent ID from local storage. If no ID exists, a new one is
 * generated and stored. This ID is used to identify the user across sessions.
 * @returns {string} The persistent ID.
 */
export function getPersistentId(): string {  
    // Check if a persistent ID already exists in local storage
    let persistentId = localStorage.getItem('persistentId');
    
    // If no persistent ID exists, generate a new one and store it
    if (!persistentId) {
        persistentId = generateUniqueId("persistent");
        localStorage.setItem('persistentId', persistentId);
    }

    return persistentId;
}

/**
 * @deprecated Use {@link getPersistentId} instead.
 */
export function getPermanentId() {
    return getPersistentId();
}

function generateUniqueId(prefix: string = 'session') {
    // Generate a unique ID using a combination of Date.now() and Math.random()
    return prefix + '-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}