import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { IState } from 'src/app/models/istate.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { IShoppingcart } from 'src/app/models/ishoppingcart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  public shoppingcart: Array<IShoppingcart>

  constructor(private shoppingCartService: ShoppingCartService, private router: ActivatedRoute, private store: Store<IState>) { }

  ngOnInit(): void {

    this.store.select(state => state.shoppingcart).subscribe(res => this.shoppingcart = res)
  }

  increment(item) {
    this.shoppingCartService.increment(item)
  }

  decrement(item) {
    this.shoppingCartService.decrement(item)
  }

}
