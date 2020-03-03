import { Body, Controller, Post } from '@nestjs/common';
import { BalanceCalculateDto } from './dto/balance-calculate.dto';
import { BalanceService } from './balance.service';

@Controller('api/balance')
export class BalanceController {
  @Post('')
  async returnBalance(@Body()calcBalance:BalanceCalculateDto):Promise<object>{
    let contributionAsString:string = "";
    let contributions = calcBalance.contributions;
    let persons = calcBalance.persons;
    let balance:object={};
    let balanceService:BalanceService = new BalanceService();
    balance["balance"] = await balanceService.getBalance(persons, contributions);
    return balance;
  }
}
