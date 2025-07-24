import { NextFunction, Request, Response } from 'express';
import { body, ValidationChain, validationResult } from 'express-validator';

export const idPriceRule:ValidationChain[] = [
  body("idPrice").notEmpty().withMessage('the idPrice is required!'),
  body("idPrice").isString().withMessage('the idPrice must be a string!'),
  body("idPrice").matches(/^[a-zA-Z0-9_\s]+$/).withMessage('idPrice must only contain letters, numbers and underscore!'),
  body("idPrice").escape()
]

export const validateResult = (req:Request,res:Response,next:NextFunction)=>{
  const result = validationResult(req);
  if(!result.isEmpty()){
    res.status(400).json(result.mapped());
  }
  else{
    next();
  }
}