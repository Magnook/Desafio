import { ProductDeletComponent } from './components/product/product-delet/product-delet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { DialogOverviewExampleDialogComponent } from './components/product/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import PacienteCallComponent from './components/product/paciente-call/paciente-call.component';

const routes: Routes = [
  {
  path:"",
  component : HomeComponent
  },{
    path: "products",
    component: ProductCrudComponent
  },{
    path: "products/create",
    component: ProductCreateComponent
  },{
    path: "products/update/:id",
    component: ProductUpdateComponent
  },{
    path: "products/delet/:id",
    component: ProductDeletComponent
  },{
    path: "products/call/:id",
    component: PacienteCallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
