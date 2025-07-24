import { config } from "../config/config.js";
import { Request, Response } from "express";
import Stripe from "stripe";

const stripe = new Stripe(config.STRIPE);

export const apiPayments = async function (req: Request, res: Response) {
  type requestData = {
    idPrice: string
  }

  const { idPrice }: requestData = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: idPrice,
          quantity: 1
        }
      ],
      success_url: config.SUCCES_URL,
      cancel_url: config.CANCEL_URL
    });
    res.json({ url: session.url });
  } 
  catch (error) {
   res.status(400).json({errorMessage:"Error when processing payment, the field idprice may be incorrect"});
  }
}