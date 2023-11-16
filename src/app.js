import express from "express";
import commentRouter from "./routers/comment-router"

const app = express();

app.use(express.json());

app.use('/',commentRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

export {app};