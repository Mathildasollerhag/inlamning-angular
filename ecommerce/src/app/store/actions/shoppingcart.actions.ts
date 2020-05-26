import { Action } from '@ngrx/store';
import { ActionTypes } from '../actiontypes';
import { IShoppingcart } from 'src/app/models/ishoppingcart.model';

export class Add implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_ADD
    constructor(public payload: IShoppingcart) {}
}

export class Remove implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_REMOVE
    constructor(public payload: string) {}
}

export class Clear implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_CLEAR
    constructor() {}
}

export class Increment implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_INCREMENT
    constructor(public payload: IShoppingcart) {}
}

export class Decrement implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_DECREMENT
    constructor(public payload: IShoppingcart) {}
}

export class Quantity implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_QUANTITY
    constructor(public payload: number) {}
}

export class Amount implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_AMOUNT
    constructor(public payload: number) {}
}

export type Actions = Add | Remove | Clear | Increment | Decrement | Quantity | Amount