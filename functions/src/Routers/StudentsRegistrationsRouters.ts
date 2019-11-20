
import { getStudentRegistrationById, insertStudentRegistraion, getStudentsRegistrations, updateStudentRegistration } from '../Controllers/StudentsRegistrationsControllers';
import { Router } from 'express';

export const studentsRegistrationsRouter = Router();

studentsRegistrationsRouter.route("/")
                                .get(getStudentsRegistrations)
                                .post(insertStudentRegistraion);

studentsRegistrationsRouter.route("/:id")
                            .get(getStudentRegistrationById)
                            .put(updateStudentRegistration)

