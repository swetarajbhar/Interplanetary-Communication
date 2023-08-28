"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../../controller/earth-mars-communication/index");
const index_2 = __importDefault(require("../../middleware/index"));
const router = (0, express_1.Router)();
router.use(index_2.default);
router.post('/api/earth-mars-comm/message', index_1.sendMessage);
exports.default = router;
