import * as functions from 'firebase-functions';
import * as express from "express";
import {rootRouter} from "./Routers/RootRouters"

const app = express();
app.use(express.json());
app.use(rootRouter);

export const api = functions.https.onRequest(app);
