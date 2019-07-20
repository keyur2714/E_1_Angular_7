import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../manage-products/product.service';
import { Product } from '../manage-products/product.mode';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit, AfterViewInit, AfterContentInit {

  productUpdateForm : FormGroup;
  message : string = '';
  selectedProductId : number = 0;
  selectedProduct : Product = new Product();

  constructor(private activatedRoute : ActivatedRoute,private productService : ProductService,private location:Location,private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.createProductUpdateForm();
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.selectedProductId = params.id;
        this.productService.getProductById(this.selectedProductId).subscribe(
          (product : Product)=>{
            this.selectedProduct = product;                
          }
        )
      }
    )
  }

  ngAfterViewInit() {
    alert(this.selectedProduct.code);    
  }

  ngAfterContentInit(){
    alert(this.selectedProduct.code);
    this.productUpdateForm.setValue({"code": this.selectedProduct.code,"description": this.selectedProduct.description, "price": this.selectedProduct.price});
  }

  createProductUpdateForm():void {    
    this.productUpdateForm = this.formBuilder.group({
      code : this.formBuilder.control(''),
      description : this.formBuilder.control(''),
      price : this.formBuilder.control('')
    });
  }

  update(): void {
    this.selectedProduct = this.productUpdateForm.value;
    this.productService.updateProduct(this.selectedProduct).subscribe(
      (data)=>{
        console.log(data);
        this.message = 'Product Updated Successfully...!';
      }
    )
  }

  back(): void {
    this.location.back();
  }
}
