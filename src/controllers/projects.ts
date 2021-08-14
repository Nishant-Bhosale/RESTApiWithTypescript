import { RequestHandler } from "express";
import Project from "../models/Project";

const projects: Project[] = [];

export const createProject: RequestHandler = (req, res, next) => {
	const projectName = (req.body as { projectName: string }).projectName;

	const project: Project = new Project(Math.random().toString(), projectName);

	projects.push(project);
	res.status(201).json(project);
};

export const getProjects: RequestHandler = (req, res, next) => {
	res.status(200).json({ projs: projects });
};

export const updateProject: RequestHandler<{ id: string }> = (
	req,
	res,
	next,
) => {
	const id: string = req.params.id;
	const projectName = (req.body as { projectName: string }).projectName;

	const todoIndex = projects.findIndex((project) => project.id === id);

	if (todoIndex < 0) {
		throw new Error("Could not find the project");
	}

	projects[todoIndex] = new Project(projects[todoIndex].id, projectName);

	res.status(200).json({ proj: projects[todoIndex] });
};

export const deleteProject: RequestHandler<{ id: string }> = (
	req,
	res,
	next,
) => {
	const id = req.params.id;

	const todoIndex = projects.findIndex((project) => project.id === id);

	if (todoIndex < 0) {
		throw new Error("Could not find the project");
	}

	projects.filter((project) => project.id !== id);

	res.status(200).json({ projects });
};
