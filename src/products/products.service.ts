import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Userdate } from 'src/users/users.guard';

@Injectable()
export class ProductsService {
  private products =[
    {id:1,category:"phone", name:"iphone", price:500}
  ]
  create(createProductDto: CreateProductDto) {
    const lastId =this.products[this.products.length -1]?.id||0
    const newProduct ={
      id:lastId+1,
      ...createProductDto
    }
    this.products.push(newProduct)
    return newProduct;
  }

  findAll(guardPassed: boolean) {
    if(guardPassed){
      return this.products.map(products => {
        return{
          ...products,
          price:products.price/2
        }
      })
    }
    return this.products;
  }

  findOne(id: number) {
    return this.products.find(el => el.id===id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const index = this.products.findIndex(el => el.id===id)
    if(index ===-1) throw new BadRequestException()
    return this.products[index]={...this.products[index], ...updateProductDto};
  }

  remove(id: number) {
    const index = this.products.findIndex(el => el.id===id)
    if(index ===-1) throw new BadRequestException()
    return this.products.splice(index,1);
  }
}
