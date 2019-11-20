
import { getAvaliationById, insertAvaliation, getAvaliations, updateAvaliation } from '../Controllers/AvaliationsControllers';
import { Router } from 'express';

export const avaliationsRouter = Router();

avaliationsRouter.route("/")
                                .get(getAvaliations)
                                .post(insertAvaliation);

avaliationsRouter.route("/:id")
                            .get(getAvaliationById)
                            .put(updateAvaliation)

