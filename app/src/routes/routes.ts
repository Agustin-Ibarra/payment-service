import express,{ Router } from 'express';
import swwagerUI from 'swagger-ui-express';
import swaggerSetup from '../docs/swagger.js';
import { apiPayments } from '../controllers/payments.cotroller.js';
import { amountRule, descriptionRule, itemRule, totalRule, validateResult } from '../midllewares/middleware.js';
import { auth } from '../auth/auth.js';

const router:Router = Router();

router.use(express.json());
router.use('/microservice/payments/docs',swwagerUI.serve,swwagerUI.setup(swaggerSetup));
router.post('/payments',auth,itemRule,descriptionRule,amountRule,totalRule,validateResult,apiPayments);

export default router;