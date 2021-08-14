"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projects_1 = __importDefault(require("./routes/projects"));
const app = express_1.default();
app.use("/projects", projects_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ msg: err.message });
});
app.listen(3000);
