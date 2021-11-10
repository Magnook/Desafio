import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }  

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: any): Observable<any>{
    console.log(id)
    const url = `${this.baseUrl}/${id}`
    return this.http.get<any>(url)
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  delet(id: number): Observable<any>{
    console.log(id)
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url)
  }

 // showStatus(status: string) Observable{
  //}


}
