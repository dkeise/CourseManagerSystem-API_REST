import * as functions from 'firebase-functions';
import * as express from "express";
import {rootRouter} from "./Routers/RootRouters"
//import * as admin from 'firebase-admin';

// admin.initializeApp(functions.config().firebase);
// const db = admin.firestore();


const app = express();
app.use(express.json());
app.use(rootRouter);

export const api = functions.https.onRequest(app);
