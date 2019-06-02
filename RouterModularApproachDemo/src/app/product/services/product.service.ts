import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
@Injectable()
export class ProductService {
    productURL : string = 'http://localhost:3000/products';

    constructor(private httpClient:HttpClient){}

    getProductList():Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.productURL);
    }

    getProductById(productId : number): Observable<Product> {
        return this.httpClient.get<Product>(this.productURL+"/"+productId);
    }
}