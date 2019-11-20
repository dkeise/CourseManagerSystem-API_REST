import { Router } from "express";
import { studentsRouter } from "./StudentsRouters";

export const rootRouter = Router();

rootRouter.use("/students",studentsRouter);