import { Component, OnInit } from '@angular/core';
import { ProductCatalogService } from 'src/app/services/product-catalog.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  constructor(private productCatalogService: ProductCatalogService) { }

  ngOnInit(): void {
    this.productCatalogService.clear()
    this.productCatalogService.get()
  }

}
