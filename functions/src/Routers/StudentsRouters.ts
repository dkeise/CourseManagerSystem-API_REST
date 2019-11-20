
import { getStudentById, insertStudent, getStudents, updateStudent } from '../Controllers/StudentsControllers';
import { Router } from 'express';

export const studentsRouter = Router();

studentsRouter.route("/")
                                .get(getStudents)
                                .post(insertStudent);

studentsRouter.route("/:id")
                            .get(getStudentById)
                            .put(updateStudent)

