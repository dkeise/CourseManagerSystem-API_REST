import { Router } from "express";
import { studentsRouter } from "./StudentsRouters";
import { teachersRouter} from "./TeachersRouters";

export const rootRouter = Router();

rootRouter.use("/students",studentsRouter);
rootRouter.use("/teachers",teachersRouter)