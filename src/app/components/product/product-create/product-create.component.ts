import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    password: 0,
    id: 0,
  }

  constructor(private productService: ProductService,
    private Router: Router) {

  }

  ngOnInit(): void {
  }

  createProduct(): void{
  this.productService.create(this.product).subscribe(() =>{
  this.productService.showMessage('Paciente Adicionado')
  this.Router.navigate(['/pacientes'])
  })
    
    
}

  cancel(): void{
    this.Router.navigate(['/pacientes'])
  }

}
