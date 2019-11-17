import * as functions from 'firebase-functions';
// import * as express from "express";
// import {rootRouter} from "./Routers/RootRouters"
// import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const api = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

// admin.initializeApp(functions.config().firebase);
// const db = admin.firestore();


// const app = express();
// app.use(express.json());
// app.use(rootRouter);

// export const api = functions.https.onRequest(app);
