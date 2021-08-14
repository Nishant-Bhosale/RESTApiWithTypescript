"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.getProjects = exports.createProject = void 0;
const Project_1 = __importDefault(require("../models/Project"));
const projects = [];
const createProject = (req, res, next) => {
    const projectName = req.body.projectName;
    const project = new Project_1.default(Math.random().toString(), projectName);
    projects.push(project);
    res.status(201).json(project);
};
exports.createProject = createProject;
const getProjects = (req, res, next) => {
    res.status(200).json({ projs: projects });
};
exports.getProjects = getProjects;
const updateProject = (req, res, next) => {
    const id = req.params.id;
    const projectName = req.body.projectName;
    const todoIndex = projects.findIndex((project) => project.id === id);
    if (todoIndex < 0) {
        throw new Error("Could not find the project");
    }
    projects[todoIndex] = new Project_1.default(projects[todoIndex].id, projectName);
    res.status(200).json({ proj: projects[todoIndex] });
};
exports.updateProject = updateProject;
const deleteProject = (req, res, next) => {
    const id = req.params.id;
    const todoIndex = projects.findIndex((project) => project.id === id);
    if (todoIndex < 0) {
        throw new Error("Could not find the project");
    }
    projects.filter((project) => project.id !== id);
    res.status(200).json({ projects });
};
exports.deleteProject = deleteProject;
