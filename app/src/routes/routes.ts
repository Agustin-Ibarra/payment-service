import express,{ NextFunction, Request, Response, Router } from 'express';
import swwagerUI from 'swagger-ui-express';
import swaggerSetup from '../docs/swagger.js';
import { apiPayments } from '../controllers/payments.cotroller.js';
import { amountRule, descriptionRule, itemRule, totalRule, validateResult } from '../midllewares/inputs.middleware.js';
import { auth } from '../auth/checkAuth.js';
import logger from '../monitoring/logger.js';

const router:Router = Router();

router.use(express.json());
router.use('/microservice/payments/docs',swwagerUI.serve,swwagerUI.setup(swaggerSetup));
router.use((req:Request,res:Response,next:NextFunction)=>{res.on("finish",()=>{
  if(res.statusCode < 400){
    logger.info(`method:${req.method}, statusCode:${res.statusCode}, url:${req.url}, ipAdress:${req.ip}`);
  }
  else if(res.statusCode < 500){
    logger.warning(`method:${req.method}, statusCode:${res.statusCode}, url:${req.url}, ipAdress:${req.ip}`);
  }
  else{
    logger.error(`method:${req.method}, statusCode:${res.statusCode}, url:${req.url}, ipAdress:${req.ip}`);
  }
  });
  next();
});
router.post('/payments',auth,itemRule,descriptionRule,amountRule,totalRule,validateResult,apiPayments);

export default router;