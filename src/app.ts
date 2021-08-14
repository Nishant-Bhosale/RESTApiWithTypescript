import express, { Request, Response, NextFunction } from "express";
import projectRoutes from "./routes/projects";

const app = express();

app.use("/projects", projectRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ msg: err.message });
});

app.listen(3000);
