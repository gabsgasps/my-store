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
        this.getWishList()
    );
    constructor() { 

        this.getWishList();

        if(this.hasWishlist()) this.wishList = this.getWishList();

    }

    addAtWishList(name, price) {
        
        if(this.hasWishlist()) this.wishList = this.getWishList();

        this.wishList.push({name, price});

        window.localStorage.setItem(wishListLocalStorage, JSON.stringify(this.wishList));

        this.wishListSubject.next(this.wishList);
    }
    
    getWishListObservable() {
        return this.wishListSubject.asObservable();
    } 
    private hasWishlist() {
        return !!this.getWishList();
    }
    private getWishList() {

        return JSON.parse(window.localStorage.getItem(wishListLocalStorage));
    }
}