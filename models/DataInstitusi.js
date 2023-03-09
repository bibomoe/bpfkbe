import { DataTypes, QueryTypes } from "sequelize"
import { databaseBPFK } from "../config/Database.js"

export const institusi = databaseBPFK.define('data_institusi', {
    kode_institusi: {
        type: DataTypes.INTEGER
    },
    jenis_user_id: {
        type: DataTypes.INTEGER
    },
    nama_institusi: {
        type: DataTypes.STRING
    },
    propinsi_id: {
        type: DataTypes.INTEGER
    },
    kota_id: {
        type: DataTypes.INTEGER
    },
    alamat: {
        type: DataTypes.STRING
    },
    kepemilikan_id: {
        type: DataTypes.INTEGER
    },
    no_telp: {
        type: DataTypes.INTEGER
    },
    website: {
        type: DataTypes.STRING
    },
    media_sosial: {
        type: DataTypes.STRING
    },
    nama_pj: {
        type: DataTypes.STRING
    },
    nama_pj_lab_kalibrasi: {
        type: DataTypes.STRING
    },
    nama_pj_mutu: {
        type: DataTypes.STRING
    },
    contact_person: {
        type: DataTypes.STRING
    },
    nomor_izin_operasional: {
        type: DataTypes.INTEGER
    },
    tanggal_izin_operasional: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING
    },
    dokumen_izin_operasional: {
        type: DataTypes.STRING
    }
})