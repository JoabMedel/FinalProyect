import express from "express";
import registroRouter from "../src/routes/signup";
import loginRouter from "../src/routes/login";
import allusersRouter from "../src/routes/users";

import cors from "cors";



const app = express();

app.use(express.json());
app.use(registroRouter);
app.use(loginRouter);
app.use(allusersRouter);
app.use(cors());



export default app;