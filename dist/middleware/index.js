"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerMiddleware = (req, res, next) => {
    const sender = req.header('x-sender');
    const receiver = req.header('x-receiver');
    req.body.sender = sender;
    req.body.receiver = receiver;
    console.log(`Sender: ${sender}, Receiver: ${receiver}`);
    next();
};
exports.default = LoggerMiddleware;
