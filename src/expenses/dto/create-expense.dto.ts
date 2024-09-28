import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateExpenseDto {
  @IsNotEmpty()
  @IsNumber()
  price: number
}
