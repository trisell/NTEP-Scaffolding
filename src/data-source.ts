import { DataSource } from "typeorm"; 

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "pg",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "application",
    synchronize: true,
    logging: true,
    subscribers: [],
    migrations: [],
})