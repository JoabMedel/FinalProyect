import express from "express";
import registroRouter from "../src/routes/signup";
import loginRouter from "../src/routes/login";
import allusersRouter from "../src/routes/users";
import registerToken from "../src/routes/reset-password";
import updateUser from "../src/routes/update-password";
import cors from "cors";



const app = express();

app.use(cors());
app.use(express.json());
app.use(registroRouter);
app.use(loginRouter);
app.use(allusersRouter);
app.use(registerToken);
app.use(updateUser);




export default app;