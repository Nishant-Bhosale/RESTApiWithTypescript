import { Router } from "express";
import { createProject } from "../controllers/projects";
const router = Router();

router.post("/", createProject);

router.get("/");

router.patch("/:id");

router.delete("/:id");

export default router;
