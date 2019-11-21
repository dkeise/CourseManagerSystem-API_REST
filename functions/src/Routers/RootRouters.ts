import { Router } from "express";
import { studentsRouter } from "./StudentsRouters";
import { studentsRegistrationsRouter } from "./StudentsRegistrationsRouters";
import { evaluattionBulletinRouter } from "./EvaluationsBulletinsRouters";
import { coursesRouter } from "./CoursesRouters";
import { avaliationsRouter } from "./AvaliationsRouters";
import { avaliationsGradesRouter} from "./AvaliationsGradesRouters";
import { teachersRouter} from "./TeachersRouters";

export const rootRouter = Router();

rootRouter.use("/students",studentsRouter);
rootRouter.use("/studentsregistrations",studentsRegistrationsRouter);
rootRouter.use("/bulletins",evaluattionBulletinRouter);
rootRouter.use("/courses",coursesRouter);
rootRouter.use("/avaliations",avaliationsRouter);
rootRouter.use("/avaliationsgrades",avaliationsGradesRouter);
rootRouter.use("/teachers",teachersRouter)