import express from "express";
import registroRouter from "../src/routes/signup";
import loginRouter from "../src/routes/login";
import allusersRouter from "../src/routes/users";
import rolesRouter from "../src/routes/addRol";
import rolesUsersRouter from "../src/routes/rolForUser";
import updateUser from "../src/routes/update-password";
import registerToken from "../src/routes/reset-password";
import routerSendMail from "../src/routes/sendMail";
import cors from "cors";
import helmet from "helmet"


const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(registroRouter);
app.use(loginRouter);
app.use(rolesUsersRouter);
app.use(rolesRouter);
app.use(allusersRouter);
app.use(registerToken);
app.use(updateUser);
app.use(routerSendMail);



export default app;