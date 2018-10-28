import { Component } from '@angular/core';
import { Product } from '../../products/product-item';

@Component({
    selector: 'app-homepage',
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {

    products: Product[] = [
        {
            img: `https://cdn-youcom-solo.omniplat.io/media/catalog/product/cache/small_image/257x351/602f0fa2c1f0d1ba5e241f914e856ff9/h/t/httpslinxb2c104.blob.core.windows.net104-001-prdgerallinxshopfotosfoto_23-01-218_17-1045tp_351.jpg`,
            name: 'Camiseta Básica Estilo 1',
            price: 39.90,
            parcel: '2 x Parcelas de R$'
        },
        {
            img: `https://cdn-youcom-solo.omniplat.io/media/catalog/product/cache/image/040ec09b1e35df139433887a97daa66f/h/t/httpslinxb2c104.blob.core.windows.net104-001-prdgerallinxshopfotosfoto_23-01-1270_033_9.jpg`,
            name: 'Camiseta Básica ',
            price: 49.90,
            parcel: '5 x Parcelas de R$'
        },
        {
            img: `https://cdn-youcom-solo.omniplat.io/media/catalog/product/cache/small_image/257x351/602f0fa2c1f0d1ba5e241f914e856ff9/h/t/httpslinxb2c104.blob.core.windows.net104-001-prdgerallinxshopfotosfoto_23-01-218_17-1045tp_351.jpg`,
            name: 'Camiseta Básica Amarelo 1',
            price: 70.90,
            parcel: '2 x Parcelas de R$'
        },
        {
            img: `https://cdn-youcom-solo.omniplat.io/media/catalog/product/cache/image/040ec09b1e35df139433887a97daa66f/h/t/httpslinxb2c104.blob.core.windows.net104-001-prdgerallinxshopfotosfoto_23-01-1270_033_9.jpg`,
            name: 'Camiseta Básica Amarelo-Escuro',
            price: 49.90,
            parcel: '5 x Parcelas de R$'
        },
        {
            img: `https://cdn-youcom-solo.omniplat.io/media/catalog/product/cache/small_image/257x351/602f0fa2c1f0d1ba5e241f914e856ff9/h/t/httpslinxb2c104.blob.core.windows.net104-001-prdgerallinxshopfotosfoto_23-01-218_17-1045tp_351.jpg`,
            name: 'Camiseta Básica Amarelo-Escuro 3',
            price: 70.90,
            parcel: '2 x parcelas de R$'
        },
        {
            img: `https://cdn-youcom-solo.omniplat.io/media/catalog/product/cache/small_image/257x351/602f0fa2c1f0d1ba5e241f914e856ff9/h/t/httpslinxb2c104.blob.core.windows.net104-001-prdgerallinxshopfotosfoto_23-01-218_17-1045tp_351.jpg`,
            name: 'Camiseta Básica Amarelo-Escuro 2',
            price: 70.90,
            parcel: '2 x Parcelas de R$'
        }

    ];

    constructor() { }
}
