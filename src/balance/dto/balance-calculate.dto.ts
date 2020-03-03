import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class BalanceCalculateDto{
   @ApiProperty({
      type:'array',
      items: {
         type: 'string',
      }
     })
   @IsNotEmpty()
   persons:[string];

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
   contributions:{};
}
