// Logger utility for consistent error handling and debugging
export const logger = {
    info(message) {
        console.log(`[INFO] ${message}`);
    },
    
    warn(message) {
        console.warn(`[WARN] ${message}`);
    },
    
    error(message, error) {
        console.error(`[ERROR] ${message}`, error);
    },
    
    debug(message, data) {
        if (process.env.NODE_ENV !== 'production') {
            console.debug(`[DEBUG] ${message}`, data);
        }
    }
};