import { Sequelize } from "sequelize"

export const databaseBPFK = new Sequelize(process.env.DB_DATABASE_BPFK, process.env.DB_USERNAME_BPFK, process.env.DB_PASSWORD_BPFK, {
    host: process.env.DB_HOST_BPFK,
    dialect: "mysql",
    define: {
        freezeTableName: true,
        timestamps: false
    },
    dialectOptions: {
        // useUTC: false'
    },
    timezone: '+07:00', //for writing to database
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})