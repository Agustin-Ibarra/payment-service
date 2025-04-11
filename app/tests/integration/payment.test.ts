import request from 'supertest';
import { app, server } from '../../src/index';
import { afterAll, describe, expect, test } from '@jest/globals';
import { config } from '../../src/config/config';

describe("POST /payments",()=>{
  const item = {
    item:"item test",
    itemDescription:"item description",
    amount:1,
    total:2500
  }

  const failItem = {
    item:null,
    itemDescription:"item description #",
    amount:"A",
    total:2500.1
  }

  test('el codigo deberia ser 401',async()=>{
    const response = await request(app).post('/payments').send(item);
    expect(response.statusCode).toBe(401);
  });

  test('el codigo deberia ser 400',async()=>{
    const response = await request(app).post('/payments')
    .set('Cookie',[`jwt=${config.TOKEN_TEST}`])
    .send(failItem);
    expect(response.statusCode).toBe(400);
  });
  
  test('el codigo deberia ser 200',async()=>{
    const response = await request(app).post('/payments')
    .set('Cookie',[`jwt=${config.TOKEN_TEST}`])
    .send(item);
    expect(response.statusCode).toBe(201);
  });
  
  test('la respuesta deberia incluir una url',async()=>{
    const response = await request(app).post('/payments')
    .send(item)
    .set('Cookie',[`jwt=${config.TOKEN_TEST}`]);
    console.log(typeof(response.body.paymentUrl));
    expect(response.body.paymentUrl).toMatch(/^https:\/\/checkout\.stripe\.com\//);
  });

  afterAll(async()=>{
    await server.close();
  });
});