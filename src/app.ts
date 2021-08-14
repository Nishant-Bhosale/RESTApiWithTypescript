import express, { Request, Response, NextFunction } from "express";
import projectRoutes from "./routes/projects";
import { json } from "body-parser";

const app = express();
app.use(json());
app.use("/projects", projectRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ msg: err.message });
});

app.listen(3000);
