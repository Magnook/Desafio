import PacienteCallComponent from './../paciente-call/paciente-call.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id','name','password', 'options']

  constructor(private ProductService: ProductService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
    this.products = products
    console.log(products)
    })
  }
  
  
}
