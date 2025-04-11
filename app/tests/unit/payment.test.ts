import { describe, expect, jest, test } from '@jest/globals';
import { apiPayments } from '../../src/controllers/payments.cotroller';
import { Request, Response } from 'express';

describe("POST /payments",()=>{
  const req = {
    body:{
      item:"item test",
      description:"item test description",
      amount:1,
      total:2500
    }
  } as unknown as Request;

  const res = {
    status:jest.fn().mockReturnThis(),
    json:jest.fn()
  } as unknown as Response;

  test('el codigo deberia ser 201',async()=>{
    await apiPayments(req,res);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  test('la respuesta debe contener un objeto json',async()=>{
    await apiPayments(req,res);
    expect(res.json).toHaveBeenCalled();  
  });
});