import { Injectable } from "@angular/core";
import { CartProduct } from "../../cart/cart-product";
import { BehaviorSubject } from "rxjs";

const wishListLocalStorage = 'WishListLocalStorage';
@Injectable({
    providedIn: 'root'
})
export class WishListService {

    wishList: CartProduct[] = [];
    
    wishListSubject = new BehaviorSubject<CartProduct[]>(
        JSON.parse(window.localStorage.getItem(wishListLocalStorage))
    );
    constructor() { 

        JSON.parse(window.localStorage.getItem(wishListLocalStorage));

        if(this.hasWishlist()) this.wishList = JSON.parse(window.localStorage.getItem(wishListLocalStorage));

    }

    addAtWishList(name, price) {
        
        if(this.hasWishlist()) 
            this.wishList = JSON.parse(window.localStorage.getItem(wishListLocalStorage));

        if(this.hasItProduct(name)) {

            this.wishList.push( {name, price} );
    
            window.localStorage.setItem(wishListLocalStorage, JSON.stringify(this.wishList));
    
            this.wishListSubject.next(JSON.parse(window.localStorage.getItem(wishListLocalStorage)));
        }
    }

    removeProductItem(name: any) {

        this.wishList.splice(name, 1);
        window.localStorage.setItem( wishListLocalStorage, JSON.stringify(this.wishList));
        this.wishListSubject.next(this.getWishList());
    }
 
    getWishListObservable() {
        return this.wishListSubject.asObservable();
    }
    
    emptyWishList() {

        this.wishList = [];
        window.localStorage.removeItem(wishListLocalStorage);
        this.wishListSubject.next(JSON.parse(window.localStorage.getItem(wishListLocalStorage)));
    }
    private hasItProduct(product: string) {

        return !this.wishList.some(p => product == p.name);
    }
    private hasWishlist() {
        return !!JSON.parse(window.localStorage.getItem(wishListLocalStorage));
    }
    private getWishList() {

        return JSON.parse(window.localStorage.getItem(wishListLocalStorage));
    }
}