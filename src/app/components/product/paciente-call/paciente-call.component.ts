import { Product } from '../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-paciente-call',
  templateUrl: './paciente-call.component.html',
  styleUrls: ['./paciente-call.component.css']
})
export default class PacienteCallComponent implements OnInit {
  
  product!: Product;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
    
      const id = this.route.snapshot.paramMap.get('id');
      this.productService.readById(id).subscribe((product) =>{
        this.product = product;
      });
    }

  
  

}
  
  




