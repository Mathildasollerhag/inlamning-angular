import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct.model';
import { IState } from 'src/app/models/istate.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  public product: IProduct

  constructor(private shoppingCartService: ShoppingCartService, private productService: ProductService, private router: ActivatedRoute,  private store: Store<IState>) { }

  ngOnInit(): void {
    this.productService.clear()
    this.productService.getById(this.router.snapshot.params.id)
  }

  clearCart() {
    this.shoppingCartService.clear()
  }

}
0