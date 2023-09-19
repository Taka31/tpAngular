import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {path:'',redirectTo:'liste-produit',pathMatch:'full'},
  {path:'liste-produit',component:ListProductComponent,pathMatch:'full'},
  {path:'modifier-produit/:id',component:EditProductComponent},
  {path:'creation',component:CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
