import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSOWRD, DB_PORT, DB_USERNAME } from "../configuration";


export const AppDataSource = new DataSource({
    type: "mysql",
	host: DB_HOST,
	port: DB_PORT,
	username: DB_USERNAME,
	password: DB_PASSOWRD,
	database: DB_NAME,
	entities: [],
	synchronize: true,
	logging: false,
});