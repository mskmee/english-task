import {IProductData} from './IProductData';

export interface IProductsData {
  limit: number,
  products: IProductData[],
  skip: number,
  total: number,
}
