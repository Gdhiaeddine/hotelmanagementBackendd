import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { createCategoryDto } from 'src/dto/create-category.dto';

@Controller('categorie')
export class CategorieController {
  constructor(private readonly categoryService: CategorieService) {}
  @Get('/all')
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Post('/add')
  createCategory(@Body() createCategoryDto: createCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto);
  }
  @Put('/update/:id')
  updateCategorie(
    @Param('id') id: string,
    @Body() createCategoryDto: createCategoryDto,
  ) {
    return this.categoryService.updateCategorie(+id, createCategoryDto);
  }
  @Delete('/delete/:id')
  deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategory(+id);
  }
}
