import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../data/iProduct';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  @Input() nom : string ="";
  @Input() description: string = "";
  @Input() prix : number = 0;
  @Input() id : string ="";
  @Input() nomBouton: string = "";

  @Output() submit = new EventEmitter<Product>();

  postData():void{
    this.submit.emit({id:this.id,nom:this.nom,description:this.description,prix:this.prix});
  }

}
