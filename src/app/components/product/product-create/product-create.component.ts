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
    price: 129.00,
    id: 0
  }

  constructor(private productService: ProductService,
    private Router: Router) {

  }

  ngOnInit(): void {
  }

  createProduct(): void{
  this.productService.create(this.product).subscribe(() =>{
  this.productService.showMessage('Produto Criado')
  this.Router.navigate(['/products'])
  })
    
    
}

  cancel(): void{
    this.Router.navigate(['/products'])
  }

}
