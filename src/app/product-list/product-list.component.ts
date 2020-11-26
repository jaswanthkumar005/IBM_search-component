import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   products;
  constructor(private productService:ProductService) { }

  ngOnInit() {
   this.productService.userDataListener().subscribe((value)=>{
     this.products = value;
     console.log(this.products);
   })
  }

  onDelete(value){
    console.log(value,"this");

   this.productService.deleteProd(value);
  }

}
