import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  category:string
  @IsString()
  @IsNotEmpty()
  name:string
  @IsNumber()
  @IsNotEmpty()
  price:number
}
