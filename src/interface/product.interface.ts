//import { CategoryInterface } from './category.interface';
//import { UniteInterface } from './unite.interface';

export interface ProductInterface {
  id: number;
  name: string;
  quantity: number;
  categoryId: number;
  uniteId: number;
  //categorie?: CategoryInterface;
  //unite?: UniteInterface;
  //productPrices?: ProductPrice[];
}
