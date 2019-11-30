
import { getTeacherById, insertTeacher, getTeachers, updateTeacher, getTeacherByLogin } from '../Controllers/TeachersControllers';
import { Router } from 'express';

export const teachersRouter = Router();

teachersRouter.route("/")  // rota 
                                .get(getTeachers)
                                .post(insertTeacher);

teachersRouter.route("/:id")  // rota 
                            .get(getTeacherById)
                            .put(updateTeacher)

teachersRouter.route("/:email/:password")  // rota 
                    .get(getTeacherByLogin)