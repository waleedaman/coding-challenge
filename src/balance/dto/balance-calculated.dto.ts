import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class BalanceCalculatedDto{
  @ApiProperty({
    type:'object',
    properties: {
      person: {
        type: 'object',
        properties:
          {
            item:
              {type:'integer'}
          }
      }
    },
  })
  @IsNotEmpty()
  balance:{};
}
