import express from 'express'

// User
import { getDataUser, insertDataUser, login, logout } from '../controllers/UsersController.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import { refreshToken } from '../controllers/RefreshToken.js'

// Master
import { getPropinsi, getKota, getKepemilikan, getJenisUser } from '../controllers/MasterController.js'
import { getDataInstitusi, insertDataInstitusi, updateDataInstitusi, deleteDataInstitusi } from '../controllers/DataInstitusiController.js'

const router = express.Router()

// User
router.get('/apibpfk/users', verifyToken, getDataUser)
router.post('/apibpfk/users', insertDataUser)

// Token
router.post('/apibpfk/login', login)
router.delete('/apibpfk/logout', logout)
router.get('/apibpfk/token', refreshToken)

// Master
router.get('/apibpfk/propinsi', getPropinsi)
router.get('/apibpfk/kota', getKota)
router.get('/apibpfk/kepemilikan', getKepemilikan)
router.get('/apibpfk/jenisUser', getJenisUser)

//Institusi
router.get('/apibpfk/institusi', getDataInstitusi)
router.post('/apibpfk/institusi', insertDataInstitusi)
router.patch('/apibpfk/institusi/:id', updateDataInstitusi);
router.delete('/apibpfk/institusi/:id', deleteDataInstitusi)

export default router