import { NextFunction, Request, Response } from 'express';
import { body, ValidationChain, validationResult } from 'express-validator';

export const itemRule:ValidationChain[] = [
  body("item").notEmpty().withMessage('the item is required!'),
  body("item").isString().withMessage('the item must be a string!'),
  body("item").matches(/^[a-zA-Z\s]+$/).withMessage('item must only contain letters and blank spaces!'),
  body("item").escape()
]

export const descriptionRule:ValidationChain[] = [
  body("itemDescription").notEmpty().withMessage('the description is required!'),
  body("itemDescription").isString().withMessage('the description must be a string!'),
  body("itemDescription").matches(/^[a-zA-Z\s]+$/).withMessage('description must only contain letters and blank spaces!'),
  body("itemDescription").escape()
]

export const amountRule:ValidationChain[] = [
  body("amount").notEmpty().withMessage('the amount is required!'),
  body("amount").isInt().withMessage('the amount must be a integer!'),
]

export const totalRule:ValidationChain[] = [
  body("total").notEmpty().withMessage('the total is required!'),
  body("total").isInt().withMessage('the total must be a integer!'),
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