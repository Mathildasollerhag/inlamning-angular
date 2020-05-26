import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { IState } from 'src/app/models/istate.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public shoppingcartQuantity: number = 0

  constructor(private shoppingCartService: ShoppingCartService, private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.select(store => store.shoppingcartQuantity).subscribe(res => this.shoppingcartQuantity = res)
  }

}
