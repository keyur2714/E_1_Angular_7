import { Component, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../manage-products/product.service';
import { Product } from '../manage-products/product.mode';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  message : string = '';
  selectedProductId : number = 0;
  selectedProduct : Product = new Product();
  isLoaded : boolean = false;

  constructor(private activatedRoute : ActivatedRoute,private productService : ProductService,private location:Location) { }

  ngOnInit() {
    this.selectedProductId = this.activatedRoute.snapshot.params.id;
    this.productService.getProductById(this.selectedProductId).subscribe(
      (product : Product)=>{        
        this.selectedProduct = product[0];          
        this.isLoaded = true;
      }
    );
    // this.activatedRoute.params.subscribe(
    //   (params)=>{
    //     this.selectedProductId = params.id;
    //     this.productService.getProductById(this.selectedProductId).subscribe(
    //       (product : Product)=>{        
    //         this.selectedProduct = product[0];          
    //         this.isLoaded = true;
    //       }
    //     );
    //   }
    // )        
  }
  update(): void {
    console.log(this.selectedProduct.product_id+" "+this.selectedProduct.code+" "+this.selectedProduct.description+" "+this.selectedProduct.price);
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
