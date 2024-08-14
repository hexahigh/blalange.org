declare global {
    interface Element {
        scrollTopMax(): number;
    }
}

// Check if running in a browser environment
if (typeof window !== 'undefined') {
    (function(elmProto){
        if ('scrollTopMax' in elmProto) {
            return;
        }
        Object.defineProperties(elmProto, {
            'scrollTopMax': {
                get: function scrollTopMax() {
                  return this.scrollHeight - this.clientTop;
                }
            }
        });
    }
    )(Element.prototype);
}

export {};

