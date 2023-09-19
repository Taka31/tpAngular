import { Component } from '@angular/core';
import { Product } from '../data/iProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  myProducts : Product[] = [];

  constructor(private myService: ProductService){

  }

  ngOnInit() :void{
    this.myProducts=this.myService.getAllProducts();
  }

}
