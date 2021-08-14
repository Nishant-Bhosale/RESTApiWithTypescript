"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = void 0;
const Project_1 = __importDefault(require("../models/Project"));
const projects = [];
const createProject = (req, res, next) => {
    const { projectName } = req.body;
    const project = new Project_1.default(Math.random().toString(), projectName);
    projects.push(project);
    res.status(201).json(project);
};
exports.createProject = createProject;
