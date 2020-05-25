export interface IProduct {
    _id?:       string
    name?:      string
    desc?:      string
    short?:     string
    price?:     number
    image?:     string
    quantity?:  number
}

// export class Product extends IProduct VANLIGT ATT MAN GÖR SÅHÄR MED INTERFACES (Objektorienterat, behövs ej nu i inlämningen)