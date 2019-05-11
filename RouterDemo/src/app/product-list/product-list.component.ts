import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe
    ((params)=>{
      alert(params.id);
      alert(params.name);
    })

    this.activatedRoute.paramMap.subscribe(
      (paramsMap) =>{
        alert(paramsMap.get('id'));
        alert(paramsMap.get('name'));
      }
    )
  }

}
