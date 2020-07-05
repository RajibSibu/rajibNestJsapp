"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
const mongoose = require("mongoose");
exports.LoginSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    passward: { type: String, required: true },
});
//# sourceMappingURL=loinModel.js.map