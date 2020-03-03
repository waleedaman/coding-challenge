import { Test, TestingModule } from '@nestjs/testing';
import { BalanceController } from './balance.controller';
import * as request from 'supertest';

const app = 'localhost:3000/api';
describe('Balance Controller', () => {
  let controller: BalanceController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalanceController],
    }).compile();
    controller = module.get<BalanceController>(BalanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('/POST balance',()=>{
    const testData:{} = {
      "persons":["alice","bob","eve"],
      "contributions":{"alice":{"apple":6,"peach":12,"pear":5},"bob":{"apple":0,"peach":6,"pear":1},"eve":{"apple":0,"peach":0,"pear":0}}
    };
    const result:{} = {
      "balance": {
        "alice": {
          "apple": 4,
            "peach": 6,
            "pear": 3
        },
        "bob": {
          "apple": -2,
            "peach": 0,
            "pear": -1
        },
        "eve": {
          "apple": -2,
            "peach": -6,
            "pear": -2
        }
      }
    };
   return request(app).post('/balance').set('Accept','application/json').send(testData).expect(result);
  });
});
