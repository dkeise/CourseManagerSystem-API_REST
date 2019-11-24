
import { getTeacherById, insertTeacher, getTeachers, updateTeacher, getTeacherByEmail } from '../Controllers/TeachersControllers';
import { Router } from 'express';

export const teachersRouter = Router();

teachersRouter.route("/")
                                .get(getTeachers)
                                .post(insertTeacher);

teachersRouter.route("/:id")
                            .get(getTeacherById)
                            .put(updateTeacher)

 teachersRouter.route("/:id/:email")
                    .get(getTeacherByEmail)