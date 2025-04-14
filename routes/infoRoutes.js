import { Router } from 'express'
import { getCompanyInfo } from '../controllers/infoController';

const router = Router()

//Hämta företagsinfo
router.get('/info', getCompanyInfo)

export default router;