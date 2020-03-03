import { Body, Controller, Post } from '@nestjs/common';
import { BalanceCalculateDto } from './dto/balance-calculate.dto';
import { BalanceService } from './balance.service';
import { BalanceCalculatedDto } from './dto/balance-calculated.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('api/balance')
export class BalanceController {
  @Post('')
  @ApiResponse({
    type: (BalanceCalculatedDto),
  })
  async returnBalance(@Body()calcBalance: BalanceCalculateDto): Promise<BalanceCalculatedDto> {
    let contributions = calcBalance.contributions;
    let persons = calcBalance.persons;
    let balance: BalanceCalculatedDto = new BalanceCalculatedDto();
    let balanceService: BalanceService = new BalanceService();
    balance.balance = await balanceService.getBalance(persons, contributions);
    return balance;
  }
}
