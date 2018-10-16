import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { CartProduct } from "../cart-product";


const NamelocalStorage = 'ProductsIntoTheCart';
@Injectable({
    providedIn: 'root'
})
export class CartService { 
    
    products: CartProduct[] = [];

    productSubject = new BehaviorSubject<CartProduct[]>( this.getProducts() );
    
    constructor() {

        this.getProducts();
        if(this.hasProducts()) 
            this.products = JSON.parse(window.localStorage.getItem('ProductsIntoTheCart'));
    } 
    
    addProduct(name: string, price: number) {
        
        if(this.hasProducts()) 
            this.products = JSON.parse(window.localStorage.getItem('ProductsIntoTheCart'));
        
        

        if(this.hasItProduct(name)){
            
            this.products.push( {name, price} );

            window.localStorage.setItem( NamelocalStorage, JSON.stringify(this.products));
        
            this.productSubject.next(this.getProducts());
        }
    
        
    }

    
    removeProductItem(name: any) {

       let p = this.products.splice(name, 1);
       window.localStorage.setItem( NamelocalStorage, JSON.stringify(p));
       this.productSubject.next(this.getProducts());
    }

    getSubjectProduct() {

        return this.productSubject.asObservable();
    }
    
    emptyCart() {

        this.products = [];
        window.localStorage.removeItem(NamelocalStorage);
        this.productSubject.next(this.getProducts());
    }
    
    hasProducts() {
        return !!this.getProducts();
    }

    // get Products into the LocalStorage
    private getProducts() {

        return JSON.parse(window.localStorage.getItem('ProductsIntoTheCart')); 
    }

     
    private hasItProduct(product: string) {

        return !this.products.some(p => product == p.name);
    }

    lengthOfProducts(): number {
        
        return this.products.length;
    }

}