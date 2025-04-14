import { Router } from 'express'
import { getCompanyInfo } from '../controllers/infoController';

const router = Router()

router.get('/info', getCompanyInfo)

export default router;