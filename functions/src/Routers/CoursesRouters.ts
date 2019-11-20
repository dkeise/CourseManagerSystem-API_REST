
import { getCourseById, insertCourse, getCourses, updateCourse } from '../Controllers/CoursesControllers';
import { Router } from 'express';

export const coursesRouter = Router();

coursesRouter.route("/")
                                .get(getCourses)
                                .post(insertCourse);

coursesRouter.route("/:id")
                            .get(getCourseById)
                            .put(updateCourse)

