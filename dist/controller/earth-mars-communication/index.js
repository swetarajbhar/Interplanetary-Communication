"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const index_1 = require("../../service/index");
const moment_1 = __importDefault(require("moment"));
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message, sender, receiver, } = req.body;
    const startTime = (0, moment_1.default)();
    const translatedMessage = (0, index_1.translateMessage)(message, sender, receiver);
    const endTime = (0, moment_1.default)();
    const processingTime = (moment_1.default.duration(endTime.diff(startTime))).asMilliseconds();
    console.log(`Processing Time : ${processingTime} milliseconds`);
    res.status(200).json({
        message: `Received message: ${message}`,
        translatedMessage,
    });
});
exports.sendMessage = sendMessage;
