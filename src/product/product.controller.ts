import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { createProductDto } from 'src/dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('/all')
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Post('/add')
  createProduct(@Body() createProductDto: createProductDto) {
    return this.productService.createProduct(createProductDto);
  }
  @Put('/update/:id')
  updateProduct(
    @Param('id') id: string,
    @Body() createProductDto: createProductDto,
  ) {
    return this.productService.updateProduct(+id, createProductDto);
  }
  @Delete('/delete/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(+id);
  }
}
