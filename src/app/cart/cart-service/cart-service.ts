import { Injectable } from "@angular/core";
import { CartProduct } from "../cart-product";
import { Subject, BehaviorSubject } from "rxjs";


const NamelocalStorage = 'ProductsIntoTheCart';
const prodIntoThelocalStorage = JSON.parse(window.localStorage.getItem('ProductsIntoTheCart'));

@Injectable({
    providedIn: 'root'
})
export class CartService { 
    
    products: CartProduct[] = [];

    productSubject = new BehaviorSubject<CartProduct[]>(
        prodIntoThelocalStorage    
    );
    
    private hasItProduct(product) {
        let a = this.products.indexOf(product);
        console.log(product);
        return a
    }

    constructor() {  
        this.getProducts(); 
    } 


    addProduct(name: string, price: number) {
       
        this.products.push({name, price});
        console.log(this.products);
        window.localStorage.setItem( NamelocalStorage, JSON.stringify(this.products));
        
        this.getProducts();
    }

    

    removeProductItem(name: any, price: any) {

       this.products.splice(name, 1);
       window.localStorage.setItem( NamelocalStorage, JSON.stringify(this.products));
    }

    getSubjectProduct() {

        return this.productSubject.asObservable();
    }

    private getProducts() {

        return this.productSubject.next(prodIntoThelocalStorage); 
    }

    
    emptyCart() {

        window.localStorage.removeItem(NamelocalStorage);
    }

   
}