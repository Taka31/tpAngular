import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data/iProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  myProduct? : Product;
  nomBouton : string = "Modifier";

  constructor(private route:ActivatedRoute, private service : ProductService){

  }

  ngOnInit():void{
    const id : any = this.route.snapshot.paramMap.get("id");
    this.myProduct=this.service.getProductById(id);
  }

  receiveData(product:Product):void{
    this.myProduct=product;
    alert("Modification effectué avec succès")
  }

}
