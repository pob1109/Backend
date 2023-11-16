import express from "express";
import {commentRouter} from "./routers/comment-router.js"

const app = express();

app.use(express.json());

app.use('/comment',commentRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
});

export {app};