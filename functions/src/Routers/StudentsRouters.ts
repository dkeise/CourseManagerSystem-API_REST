
import { getStudentById, insertStudent, getStudents, updateStudent, getStudentByLogin } from '../Controllers/StudentsControllers';
import { Router } from 'express';

export const studentsRouter = Router();

studentsRouter.route("/") // rota 
                                .get(getStudents)
                                .post(insertStudent);

studentsRouter.route("/:id")  // rota 
                            .get(getStudentById)
                            .put(updateStudent)

studentsRouter.route("/:email/:password")  // rota 
                            .get(getStudentByLogin)