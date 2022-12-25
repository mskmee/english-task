import {DataArray} from '../types/DataArray';

export interface IProductData {
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: DataArray,
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
  title: string
}
