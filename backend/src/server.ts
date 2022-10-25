import { setupDB } from "./setup";
import "reflect-metadata";
import { ORIGIN, PORT } from "./configuration";
import { rootRouter } from "./routes";
import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/";



const app = express();
app.use(express.json());
app.use(cors({origin: ORIGIN, credentials: true}));
app.use(rootRouter);
app.use(errorHandler)
app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
})

setupDB();



