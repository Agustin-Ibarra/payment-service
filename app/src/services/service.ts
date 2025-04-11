import Stripe from 'stripe';
import { config } from "../config/config.js";

const stripe = new Stripe(config.STRIPE);

export const createSession = async function(item:string,itemDescription:string,total:number,amount:number){
  const session = await stripe.checkout.sessions.create({
    line_items:[{
      price_data:{
        product_data:{
          name:item,
          description:itemDescription
        },
        currency:'usd',
        unit_amount:total*100
      },
      quantity:amount
    }],
    mode:"payment",
    success_url:config.SUCCES_URL,
    cancel_url:config.CANCEL_URL
  });
  return session.url;
}