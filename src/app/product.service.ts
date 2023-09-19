import { Injectable } from '@angular/core';
import { Product } from './data/iProduct';
import { myFakeProducts } from './data/fake-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts() : Product[]{
    return myFakeProducts;
  }

  getProductById(id:string):Product | undefined{
    let products : Product[]= this.getAllProducts();
    var product: Product | undefined = products.find($value=>$value.id===id);
    return product;
  }
}
