import {
  IsInt,
  IsNumber,
  IsPositive,
  ValidateNested,
  ArrayMinSize,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class StockEntryDto {
  @IsInt()
  productId: number;

  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsNumber()
  @IsPositive()
  price: number;
}

export class CreateStockEntryDto {
  @IsInt()
  fournisseurId: number;

  @IsDateString()
  entryDate: string;

  @ValidateNested({ each: true })
  @Type(() => StockEntryDto)
  @ArrayMinSize(1)
  items: StockEntryDto[];
}
