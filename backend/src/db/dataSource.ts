import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSOWRD, DB_PORT, DB_USERNAME } from "../configuration";
import { Food } from "../entities/food";
import { Friend } from "../entities/friend";


export const AppDataSource = new DataSource({
    type: "postgres",
	host: DB_HOST,
	port: DB_PORT,
	username: DB_USERNAME,
	password: DB_PASSOWRD,
	database: DB_NAME,
	entities: [Food,Friend],
	synchronize: true,
	logging: false,
});
