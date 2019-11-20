
import { getEvaluationBulletinById, insertEvaluationBulletin, getEvaluationsBulletins, updateEvaluationBulletin } from '../Controllers/EvaluationsBulletinsControllers';
import { Router } from 'express';

export const evaluattionBulletinRouter = Router();

evaluattionBulletinRouter.route("/")
                                .get(getEvaluationsBulletins)
                                .post(insertEvaluationBulletin);

evaluattionBulletinRouter.route("/:id")
                            .get(getEvaluationBulletinById)
                            .put(updateEvaluationBulletin)

