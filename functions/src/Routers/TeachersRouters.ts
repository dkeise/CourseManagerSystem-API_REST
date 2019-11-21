
import { getTeacherById, insertTeacher, getTeachers, updateTeacher } from '../Controllers/TeachersControllers';
import { Router } from 'express';

export const teachersRouter = Router();

teachersRouter.route("/")
                                .get(getTeachers)
                                .post(insertTeacher);

teachersRouter.route("/:id")
                            .get(getTeacherById)
                            .put(updateTeacher)

