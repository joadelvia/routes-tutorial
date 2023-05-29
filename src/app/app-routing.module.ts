import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductListComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: ProductDetailComponent },
      { path: ':id/:name', component: ProductDetailComponent, children: [
        { path: 'reviews', component: ProductReviewsComponent }
      ] }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
