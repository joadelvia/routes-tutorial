import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  productId!: string;
  productName!: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    this.productName = this.route.snapshot.queryParams['name'];
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')|| '';
      this.productName = params.get('name') || '';
    });
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
