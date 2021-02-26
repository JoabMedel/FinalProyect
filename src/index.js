import express from "express";
import registroRouter from "./routes/signup";
import loginRouter from "./routes/login";
import allusersRouter from "./routes/users";
import rolesRouter from "./routes/addRol";
import rolesUsersRouter from "./routes/rolForUser";
import updateUser from "./routes/update-password";
import registerToken from "./routes/reset-password";
import routerSendMail from "./routes/sendMail";
import cors from "cors";
import helmet from "helmet"


const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/api/v1",registroRouter);
app.use("/api/v1",loginRouter);
app.use("/api/v1",rolesUsersRouter);
app.use("/api/v1",rolesRouter);
app.use("/api/v1",allusersRouter);
app.use("/api/v1",registerToken);
app.use("/api/v1",updateUser);
app.use("/api/v1",routerSendMail);



export default app;