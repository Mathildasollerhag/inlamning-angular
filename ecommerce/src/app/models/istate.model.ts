import { IProduct } from './iproduct.model';
import { IShoppingcart } from './ishoppingcart.model';

export interface IState {
    readonly productcatalog: Array<IProduct>
    readonly product: IProduct
    readonly shoppingcart: Array<IShoppingcart>
    readonly shoppingcartQuantity: number
    readonly shoppingcartAmount: number
}