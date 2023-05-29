import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html'
})
export class ProductReviewsComponent implements OnInit {
  productId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.route.parent?.snapshot.params['id'];
  }
}