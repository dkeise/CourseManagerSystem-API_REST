
import { getAvaliationGradeById, insertAvaliationGrade, getAvaliationsGrades, updateAvaliationGrade } from '../Controllers/AvaliationsGradesControllers';
import { Router } from 'express';

export const avaliationsGradesRouter = Router();

avaliationsGradesRouter.route("/")
                                .get(getAvaliationsGrades)
                                .post(insertAvaliationGrade);

avaliationsGradesRouter.route("/:id")
                            .get(getAvaliationGradeById)
                            .put(updateAvaliationGrade)

