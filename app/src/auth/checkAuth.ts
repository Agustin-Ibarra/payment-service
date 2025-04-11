import { NextFunction, Request, Response } from "express";
import jsonwebtoken from 'jsonwebtoken';
import { config } from "../config/config.js";

export const auth = function(req:Request,res:Response,next:NextFunction){
  if(!req.headers.cookie){
    res.status(401).json({error:'unauthorized!'});
  }
  else{
    const token = req.headers.cookie.replace('jwt=','');
    try{
      jsonwebtoken.verify(token,config.SECRET);
      next();
    } 
    catch(error){
      if(error instanceof jsonwebtoken.JsonWebTokenError){
        res.status(401).json({error:'token expired!'});
      }
      else{
        console.log(error);
        res.status(500).send();
      }
    }
  }
}