import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delet',
  templateUrl: './product-delet.component.html',
  styleUrls: ['./product-delet.component.css']
})
export class ProductDeletComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((product) =>{
      this.product = product;
    });
  }

  deletProduct(): void{
    this.productService.delet(this.product.id).subscribe(()=>{
      this.productService.showMessage('Paciente excluido com sucesso!')
      this.router.navigate(['/products']);
    })
}
  cancel(): void{
    this.router.navigate(['/products']);
}

}
