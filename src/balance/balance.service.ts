import { Injectable } from '@nestjs/common';

@Injectable()
export class BalanceService {
  async getBalance(persons:[string],contributions:{}) :Promise<object>{
    let numPersons = persons.length;
    let foodItems = {};
    let balance = {};
    for(let i=0;i<numPersons;i++){
      let person = persons[i];
      let personContribution = contributions[person];
      for(let contribution in personContribution){
        if(contribution in foodItems && typeof contribution != 'object'){
          foodItems[contribution]+=personContribution[contribution];
        }else{
          foodItems[contribution] = personContribution[contribution];
        }
      }
    }
    for(let i=0;i<numPersons;i++) {
      let person = persons[i];
      let personContribution = contributions[person];
      let personBalance={};
        for(let contribution in personContribution) {
          personBalance[contribution]=personContribution[contribution] - (foodItems[contribution]/numPersons);
        }
        balance[person] = personBalance;
      }
    return balance;
  }
}
