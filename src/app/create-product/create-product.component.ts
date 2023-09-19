import { Component } from '@angular/core';
import { Product } from '../data/iProduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  nomBouton : string = "Creer";

  constructor(private router:Router){

  }

  onEventReceiver(product : Product){
    alert("vous avez bien créer le produit : "+product.id+" - nom : "+product.nom+" - description : "+product.description+" pour le prix de : "+product.prix+" Euros")
    this.router.navigateByUrl("/");
  }

}
