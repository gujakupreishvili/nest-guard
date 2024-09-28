import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ExpensesService {
  constructor(private usersService: UsersService){}
  private price =[
    { id: 1, price:122},
  ]
  create(createExpenseDto: CreateExpenseDto, userId: string) {
    const user = this.usersService.findOne(Number(userId))
    const lastId= this.price[this.price.length-1]?.id||0
    const newPrice={
      id:lastId+1,
      user:user.email,
      ...createExpenseDto
    }
    this.price.push(newPrice)
    return newPrice;
  }

  findAll() {
    return this.price;
  }

  findOne(id: number) {
    return this.price.find(el => el.id===id);
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const index = this.price.findIndex(el => el.id===id)
    if(index === -1) throw new BadRequestException()
    return this.price[index]={...this.price[index], ...updateExpenseDto};
  }

  remove(id: number) {
    const index = this.price.findIndex(el => el.id===id)
    if(index === -1) throw new BadRequestException()
    return this.price.splice(index,1);
  }
}
