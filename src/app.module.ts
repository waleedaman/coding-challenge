import { Module } from '@nestjs/common';
import { BalanceController } from './balance/balance.controller';
import { BalanceService } from './balance/balance.service';

@Module({
  imports: [],
  controllers: [BalanceController],
  providers: [BalanceService],
})
export class AppModule {}
