"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseInterceptor = exports.loggerMiddleware = void 0;
const loggerMiddleware = (req, res, next) => {
    const sender = req.header("x-sender");
    const receiver = req.header("x-receiver");
    if (!sender || !receiver) {
        throw new Error("x-sender and x-receiver headers are required");
        // const error = new Error("x-sender and x-receiver headers are required");
        // return next(error);
    }
    console.log(`Sender: ${sender}, Receiver: ${receiver}`);
    req.body.sender = sender;
    req.body.receiver = receiver;
    next();
};
exports.loggerMiddleware = loggerMiddleware;
const responseInterceptor = (req, res, next) => {
    const sender = req.header("x-sender");
    const receiver = req.header("x-receiver");
    const modifyResponse = (originalResponse) => {
        const responseKey = sender === "earth" ? "Response from Mars" : "Response from Earth";
        const modifiedResponse = {
            [responseKey]: originalResponse.message,
            "Nokia Translation": originalResponse.translatedMessage,
        };
        return modifiedResponse;
    };
    res.modifyResponse = modifyResponse;
    next();
};
exports.responseInterceptor = responseInterceptor;
