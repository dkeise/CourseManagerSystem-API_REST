
import { getTeacherById, insertTeacher, getTeachers, updateTeacher, getTeacherByLogin } from '../Controllers/TeachersControllers';
import { Router } from 'express';

export const teachersRouter = Router();

teachersRouter.route("/")
                                .get(getTeachers)
                                .post(insertTeacher);

teachersRouter.route("/:id")
                            .get(getTeacherById)
                            .put(updateTeacher)

teachersRouter.route("/:email/:password")
                    .get(getTeacherByLogin)