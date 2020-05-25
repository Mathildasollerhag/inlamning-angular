import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../models/istate.model';
import * as ShoppingCartActions from '../store/actions/shoppingcart.actions';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cart

  constructor(private store: Store<IState>) { }

  add(product, quantity) {
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let exists = this.cart.find(p => {return p.product._id === product._id})
    if(!exists) {
      this.store.dispatch(new ShoppingCartActions.Add({product, quantity}))
    }
    else {
      this.increment({product, quantity})
    }
    
  }

  remove(id) {
    this.store.dispatch(new ShoppingCartActions.Remove(id))
  }

  clear() {
    this.store.dispatch(new ShoppingCartActions.Clear())
  }

  increment(product) {
    this.store.dispatch(new ShoppingCartActions.Increment(product))
  }

  decrement(product) {
    if(product.quantity <= 1) {
      this.remove(product.product._id)
    }
    this.store.dispatch(new ShoppingCartActions.Decrement(product))
  }

}



