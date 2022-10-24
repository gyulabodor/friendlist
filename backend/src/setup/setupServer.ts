import express from "express";
import cors from "cors";
import { ORIGIN, PORT } from "../configuration";



export const setupServer = () => {
	const app = express();
	app.use(cors({ origin: ORIGIN, credentials: true }));
	app.use(express.json());

	const server = app.listen();
	console.log("server listening on port ", PORT);

	return server;
};