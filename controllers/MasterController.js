import { propinsi, kota, kepemilikan, jenisUser } from '../models/Master.js'

export const getPropinsi = (req, res) => {
    propinsi.findAll({
        attributes:[
            ['id_prop', 'id'],
            ['nama_prop', 'nama']
        ]
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

export const getKota = (req, res) => {
    kota.findAll({
        attributes:[
            ['id_kota', 'id'],
            ['nama_kota', 'nama']
        ],
        where: {
            id_prop: req.query.propid
        }
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

export const getKepemilikan = (req, res) => {
    kepemilikan.findAll({
        attributes:[
            ['id', 'id'],
            ['jenis_kepemilikan', 'nama']
        ]
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

export const getJenisUser = (req, res) => {
    jenisUser.findAll({
        attributes:[
            ['id', 'id'],
            ['jenis_user', 'nama']
        ],
        where: {
            flag: 1
        }
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