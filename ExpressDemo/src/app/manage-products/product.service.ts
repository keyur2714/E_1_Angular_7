import { Injectable } from '@angular/core';
import { Product } from './product.mode';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

    appURL : string = 'api/products';

    constructor(private httpClient : HttpClient){}

    getProductList():Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.appURL);
    }

    saveProduct(product : Product):Observable<any>{
        return this.httpClient.post<any>(this.appURL,product);
    }

}