import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: IProduct

  constructor(private router: ActivatedRoute, private productService: ProductService, private shoppingCartService: ShoppingCartService, private store: Store<IState>) { }


  ngOnInit(): void {
    this.productService.clear()
    this.productService.getById(this.router.snapshot.params.id)
    this.store.select(store => store.product).subscribe(res => this.product = res)
  }

  addToCart(product, quantity = 1) {
    this.shoppingCartService.add(product, quantity)
  }

  

}


