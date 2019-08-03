import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../manage-products/product.mode';
import { ProductService } from '../manage-products/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  product : Product = new Product();
  productEntryForm : FormGroup;
  message : string = '';

  constructor(private formBuilder : FormBuilder,private productService : ProductService,private location: Location) { }

  ngOnInit() {
    this.createProductEntryForm();
  }

  createProductEntryForm():void {
    this.productEntryForm = this.formBuilder.group({
      product_id : this.formBuilder.control(''),
      code : this.formBuilder.control(''),
      description : this.formBuilder.control(''),
      price : this.formBuilder.control('')
    });
  }

  save(): void {
    this.product = this.productEntryForm.value;
    this.product.product_id = parseInt(this.productEntryForm.get('product_id').value);
    this.productService.saveProduct(this.product).subscribe(
      (data)=>{
        console.log(data);
        this.message = 'Product Saved Successfully...!';
      }
    )
  }

  back(): void {
    this.location.back();
  }
}
