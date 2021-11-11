import { ProductDeletComponent } from './components/product/product-delet/product-delet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import PacienteCallComponent from './components/product/paciente-call/paciente-call.component';

const routes: Routes = [
  {
  path:"",
  component : HomeComponent
  },{
    path: "pacientes",
    component: ProductCrudComponent
  },{
    path: "pacientes/create",
    component: ProductCreateComponent
  },{
    path: "pacientes/update/:id",
    component: ProductUpdateComponent
  },{
    path: "pacientes/delet/:id",
    component: ProductDeletComponent
  },{
    path: "pacientes/call/:id",
    component: PacienteCallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
