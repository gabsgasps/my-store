import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartProduct } from '../cart-product';


const NamelocalStorage = 'ProductsIntoTheCart';
@Injectable({
    providedIn: 'root'
})
export class CartService {

    products: CartProduct[] = [];

    productSubject = new BehaviorSubject<CartProduct[]>( this.getProducts() );

    constructor() {
        this.getProducts();

        if (this.hasProducts()) {
            this.products = JSON.parse(window.localStorage.getItem(NamelocalStorage));
        }
    }

    addProduct(name: string, price: number) {
        if (this.hasProducts()) {
            this.products = JSON.parse(window.localStorage.getItem(NamelocalStorage));
        }
        if (this.hasItProduct(name) ) {
            this.products.push( {name, price} );
            window.localStorage.setItem( NamelocalStorage, JSON.stringify(this.products));
            this.productSubject.next(this.getProducts());
        }    
        
    }

    
    removeProductItem(name: any) {
        this.products = this.products.filter(product => product.name !== name);
        window.localStorage.setItem( NamelocalStorage, JSON.stringify(this.products));
        this.productSubject.next(this.getProducts());
    }

    getSubjectProduct() {

        return this.productSubject.asObservable();
    }
    
    emptyCart() {

        this.products = [];
        window.localStorage.removeItem(NamelocalStorage);
        this.productSubject.next(null);
    }
    
    hasProducts() {
        return !!this.getProducts();
    }

    // get Products into the LocalStorage
    private getProducts() {

        return JSON.parse(window.localStorage.getItem(NamelocalStorage) ); 
    }

     
    private hasItProduct(product: string) {

        return !this.products.some(p => product === p.name);
    }

    lengthOfProducts(): number {
        
        return this.products.length;
    }

}
