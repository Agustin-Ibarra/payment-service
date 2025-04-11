import { Request, Response } from "express";
import { createSession } from "../services/service.js";

export const apiPayments = async function(req:Request,res:Response){
  type requestData = {
    item:string,
    itemDescription:string,
    amount:number,
    total:number
  }
  const {item,amount,total,itemDescription}:requestData = req.body;
  const url = await createSession(item,itemDescription,amount,total);
  res.status(201).json({paymentUrl:url});
}