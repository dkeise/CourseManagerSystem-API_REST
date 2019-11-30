import { Router } from "express";
import { studentsRouter } from "./StudentsRouters"; //chamada da rota de estudantes
import { teachersRouter} from "./TeachersRouters"; //chamada da rota de estudantes

export const rootRouter = Router();

rootRouter.use("/students",studentsRouter);
rootRouter.use("/teachers",teachersRouter) 