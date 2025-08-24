"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    static instance;
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(message);
    }
}
// Usage
const logger = Logger.getInstance();
logger.log("Hello, PPH Logger!");
//# sourceMappingURL=Logger.js.map