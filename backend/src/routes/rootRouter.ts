import { Router } from "express";
import { friendsRouter } from "./friendsRouter"
import { foodRouter } from "./foodRouter"

export const rootRouter =  Router();

rootRouter.use("/friend", friendsRouter);
rootRouter.use("/food", foodRouter);