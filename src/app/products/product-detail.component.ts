import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // let id = +this.route.snapshot.params['id'];
        // let id = +this.route.snapshot.paramMap.get('id');
        this.product = this.route.snapshot.data['product'];
    }
}
