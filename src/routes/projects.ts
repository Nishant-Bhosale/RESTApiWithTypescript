import { Router } from "express";
import {
	createProject,
	deleteProject,
	getProjects,
	updateProject,
} from "../controllers/projects";
const router = Router();

router.post("/", createProject);

router.get("/", getProjects);

router.patch("/:id", updateProject);

router.delete("/:id", deleteProject);

export default router;
