import { NextFunction, Request, Response } from 'express';
import { body, ValidationChain, validationResult } from 'express-validator';

export const idPriceRule:ValidationChain[] = [
  body("idPrice").notEmpty().withMessage('the item is required!'),
  body("idPrice").isString().withMessage('the item must be a string!'),
  body("idPrice").matches(/^[a-zA-Z0-9_\s]+$/).withMessage('item must only contain letters and blank spaces!'),
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