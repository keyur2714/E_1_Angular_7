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

    getProductById(productId : number):Observable<Product>{
        return this.httpClient.get<Product>(this.appURL+"/"+productId);
    }

    updateProduct(product : Product):Observable<any>{
        console.log(JSON.stringify(product)+" ==========");
        return this.httpClient.put<any>(this.appURL+"/"+product.product_id,product);
    }

    deleteProductById(productId : number):Observable<any>{
        return this.httpClient.delete<any>(this.appURL+"/"+productId);
    }
}