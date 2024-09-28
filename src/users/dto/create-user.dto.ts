import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name:string
  @IsNotEmpty()
  @IsString()
  email:string
  @IsNotEmpty()
  @IsNumber()
  @Min(14)
  age:number
}
