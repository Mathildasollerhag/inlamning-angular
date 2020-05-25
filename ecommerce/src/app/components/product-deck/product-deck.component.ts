import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct.model';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';

@Component({
  selector: 'app-product-deck',
  templateUrl: './product-deck.component.html',
  styleUrls: ['./product-deck.component.css']
})
export class ProductDeckComponent implements OnInit {

  public productcatalog: Observable<Array<IProduct>>
  public product: Observable<IProduct>

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    this.productcatalog = this.store.select(store => store.productcatalog)
    this.product = this.store.select(store => store.product)
  }


}
