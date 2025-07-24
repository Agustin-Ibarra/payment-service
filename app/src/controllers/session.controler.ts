import { config } from "../config/config.js";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const sessionController = function (req: Request, res: Response) {
  const payload: Object = { idUser: 1, role: "admin" };
  const token: string = jwt.sign(payload, config.SECRET, { expiresIn: config.EXPIRES });
  const sessionLimit = new Date(Date.now() + 1000 * 60 * 60 * 24);
  const cookieOptions: object = { expires: sessionLimit };
  res.cookie('jwt', token, cookieOptions).send('authorized');
}