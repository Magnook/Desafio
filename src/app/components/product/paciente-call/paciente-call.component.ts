import { Product } from '../product.model';
import { ProductService } from './../product.service';
import { MatDialog } from '@angular/material/dialog';
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
  }

  
  

}
  
  




