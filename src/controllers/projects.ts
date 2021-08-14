import { RequestHandler } from "express";
import Project from "../models/Project";

const projects: Project[] = [];

export const createProject: RequestHandler = (req, res, next) => {
	const { projectName } = req.body;

	const project: Project = new Project(Math.random().toString(), projectName);

	projects.push(project);
	res.status(201).json(project);
};
