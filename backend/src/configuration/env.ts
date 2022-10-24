import "dotenv/config";

export const { 
    PORT, 
    ORIGIN,
    DB_HOST,
    DB_USERNAME,
    DB_PASSOWRD,
    DB_NAME 
} = process.env;

let db_port_temp;
if(process.env.DB_PORT){
    db_port_temp = parseInt(process.env.DB_PORT);
}

export const DB_PORT = db_port_temp;