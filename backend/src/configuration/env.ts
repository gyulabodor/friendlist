import "dotenv/config";

export const { 
    PORT, 
    ORIGIN,
    DB_HOST,
    DB_USERNAME,
    DB_NAME 
} = process.env;

let db_password_temp;
if(process.env.DB_PASSWORD){
    db_password_temp = process.env.DB_PASSWORD.toString();
}  
export const DB_PASSOWRD = db_password_temp

let db_port_temp;
if(process.env.DB_PORT){
    db_port_temp = parseInt(process.env.DB_PORT);
}

export const DB_PORT = db_port_temp;