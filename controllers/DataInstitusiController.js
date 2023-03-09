import { databaseBPFK } from '../config/Database.js'
import { institusi  } from '../models/DataInstitusi.js'
import Joi from 'joi'

export const getDataInstitusi = (req, res) => {
    institusi.findAll({
        // attributes: ['id','tahun'],
        // where:{
        //     rs_id: req.user.rsId,
        //     tahun: req.query.tahun
        // }
    })
    .then((results) => {
        res.status(200).send({
            status: true,
            message: "data found",
            data: results
        })
    })
    .catch((err) => {
        res.status(422).send({
            status: false,
            message: err
        })
        return
    })
}

export const insertDataInstitusi =  async (req, res) => {
    const schema = Joi.object({
        data: Joi.array()
            .items(
                Joi.object().keys({
                    jenis_user_id: Joi.number().required(),
                    nama_institusi: Joi.string().required(),
                    propinsi_id: Joi.number().required(),
                    kota_id: Joi.number().required(),
                    alamat: Joi.string().required(),
                    kepemilikan_id: Joi.number().required(),
                    no_telp: Joi.number().required(),
                    website: Joi.string().required(),
                    media_sosial: Joi.string().required(),
                    nama_pj: Joi.string().required(),
                    nama_pj_lab_kalibrasi: Joi.string().required(),
                    nama_pj_mutu: Joi.string().required(),
                    contact_person: Joi.string().required(),
                    nomor_izin_operasional: Joi.string().required(),
                    tanggal_izin_operasional: Joi.date().required(),
                    email: Joi.string().required(),
                    dokumen_izin_operasional: Joi.string().required(),
                }).required()
            ).required()
    })

    const { error, value } =  schema.validate(req.body)
    if (error) {
        res.status(404).send({
            status: false,
            message: error.details[0].message
        })
        return
    }

    let transaction
    try {
        transaction = await databaseBPFK.transaction()

        // const resultInsertHeader = await institusi.create({
        //         jenis_user_id: req.body.jenis_user_id,
        //         nama_institusi: req.body.nama_institusi,
        //         propinsi_id: req.body.propinsi_id,
        //         kota_id: req.body.kota_id,
        //         alamat: req.body.alamat,
        //         kepemilikan_id: req.body.kepemilikan_id,
        //         no_telp: req.body.no_telp,
        //         website: req.body.website,
        //         media_sosial: req.body.media_sosial,
        //         nama_pj: req.body.nama_pj,
        //         nama_pj_lab_kalibrasi: req.body.nama_pj_lab_kalibrasi,
        //         nama_pj_mutu: req.body.nama_pj_mutu,
        //         contact_person: req.body.contact_person,
        //         nomor_izin_operasional: req.body.nomor_izin_operasional,
        //         tanggal_izin_operasional: req.body.tanggal_izin_operasional,
        //         email: req.body.email,
        //         dokumen_izin_operasional: req.body.dokumen_izin_operasional
        // }, {
        //     transaction
        // })

        const dataDetail = req.body.data.map((value, index) => {
            return {
                // jenis_user_id: req.user.jenis_user_id,
                jenis_user_id: value.jenis_user_id,
                nama_institusi: value.nama_institusi,
                propinsi_id: value.propinsi_id,
                kota_id: value.kota_id,
                alamat: value.alamat,
                kepemilikan_id: value.kepemilikan_id,
                no_telp: value.no_telp,
                website: value.website,
                media_sosial: value.media_sosial,
                nama_pj: value.nama_pj,
                nama_pj_lab_kalibrasi: value.nama_pj_lab_kalibrasi,
                nama_pj_mutu: value.nama_pj_mutu,
                contact_person: value.contact_person,
                nomor_izin_operasional: value.nomor_izin_operasional,
                tanggal_izin_operasional: value.tanggal_izin_operasional,
                email: value.email,
                dokumen_izin_operasional: value.dokumen_izin_operasional

            }
        })

        const resultInsertDetail = await institusi.bulkCreate(dataDetail, { 
            transaction
        })

        
        await transaction.commit()
        res.status(201).send({
            status: true,
            message: "data created"
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            status: false,
            message: "data not created",
            error: "duplicate data"
        })
        if (transaction) {
            await transaction.rollback()
        }
    }
}

export const updateDataInstitusi = async(req,res)=>{
    try{
        await institusi.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({message: "Data Berhasil diupdate"});
    }catch(error){
        console.log(error.message);
    }
}

export const deleteDataInstitusi = async(req, res) => {
    try {
        const count = await institusi.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(201).send({
            status: true,
            message: "data deleted successfully",
            data: {
                'deleted_rows': count
            }
        })
    } catch (error) {
        res.status(404).send({
            status: false,
            message: error
        })
    }
}