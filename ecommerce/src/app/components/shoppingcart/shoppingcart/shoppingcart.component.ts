import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct.model';
import { IState } from 'src/app/models/istate.model';
import { Store } from '@ngrx/store';
import { IShoppingcart } from 'src/app/models/ishoppingcart.model';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  public product: IProduct
  public shoppingcart: Array<IShoppingcart>

  constructor(private shoppingCartService: ShoppingCartService, private productService: ProductService, private router: ActivatedRoute,  private store: Store<IState>) { }

  ngOnInit(): void {
    this.productService.clear()
    this.productService.getById(this.router.snapshot.params.id)
    this.store.select(state => state.shoppingcart).subscribe(res => this.shoppingcart = res)
  }

  clearCart() {
    this.shoppingCartService.clear()
  }

}
