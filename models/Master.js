import { DataTypes, QueryTypes } from "sequelize"
import { databaseBPFK } from "../config/Database.js"

export const propinsi = databaseBPFK.define(`propinsi`, 
    {
        id_prop :  {
            type: DataTypes.STRING,
            primaryKey: true
        },
        nama_prop: {
            type: DataTypes.STRING
        }
    }
)

export const kota  = databaseBPFK.define(`kota`,
    {
        id_kota: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        nama_kota: {
            type: DataTypes.STRING
        },
        id_prop: {
            type: DataTypes.STRING
        }
    }
)

export const kepemilikan  = databaseBPFK.define(`kepemilikan`,
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        jenis_kepemilikan: {
            type: DataTypes.STRING
        }
    }
)

export const jenisUser  = databaseBPFK.define(`jenis_user`,
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        jenis_user: {
            type: DataTypes.STRING
        },
        flag: {
            type: DataTypes.STRING
        }
    }
)
