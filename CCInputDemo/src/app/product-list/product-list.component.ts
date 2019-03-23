import { Component, OnInit } from '@angular/core';
import { Product } from './product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  headerList: string[] = ["Name","Desc","Price"];
  propertyList: string[] = ["name","desc","price"];

  constructor() { }

  ngOnInit() {
    let product1 = new Product();
    product1.productId = 10;
    product1.code = 'MMO';
    product1.name = 'Mobile';
    product1.desc = 'MI Note 4 Mobile Phones aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    product1.price = 11000;

    product1.desc = product1.desc + 'MI Note 4 Mobile Phones bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';

    let product2 = new Product();
    product2.productId = 20;
    product2.code = 'SMO';
    product2.name = 'Mobile';
    product2.desc = 'Samsung Galaxy Mobile Phones';
    product2.price = 13000;

    let product3 = new Product();
    product3.productId = 30;
    product3.code = 'AMO';
    product3.name = 'Mobile';
    product3.desc = 'Iphone X Mobile Phones';
    product3.price = 70000;

    this.productList.push(product1);
    this.productList.push(product2);
    this.productList.push(product3);
  }

}
