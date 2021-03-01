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
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger.json";



const app = express();
app.use(express.json());
app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(helmet());

app.use("/api/v1",registroRouter);
app.use("/api/v1",loginRouter);
app.use("/api/v1",rolesUsersRouter);
app.use("/api/v1",rolesRouter);
app.use("/api/v1",allusersRouter);
app.use("/api/v1",registerToken);
app.use("/api/v1",updateUser);
app.use("/api/v1",routerSendMail);



export default app;