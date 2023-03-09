import { DataTypes, QueryTypes } from "sequelize"
import { databaseBPFK } from "../config/Database.js"

export const users = databaseBPFK.define('users', {
    nama: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    },
    data_satker_id: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.DATE
    },
    modified_at: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true
})

export const insertData = (data, callback) => {
    const sqlInsert = 'INSERT INTO users (nama,email,password,data_satker_id) VALUES ( ? )'
    databaseBPFK.query(sqlInsert, {
        type: QueryTypes.INSERT,
        replacements: [data]
    })
    .then((res) => {
        callback(null, res)
    })
    .catch((error) => {
        callback(error, null)
    })
}