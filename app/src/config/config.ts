import dotenv from 'dotenv';
import envalid from 'envalid';

dotenv.config();

export const config = envalid.cleanEnv(process.env,{
  PORT:envalid.port({default:3001}),
  STRIPE:envalid.str(),
  SUCCES_URL:envalid.url(),
  CANCEL_URL:envalid.url(),
  EXPIRES:envalid.num(),
  SECRET:envalid.str(),
  DELIVERY:envalid.email(),
  RECEIVER:envalid.email(),
  TOKEN_TEST:envalid.str()
});