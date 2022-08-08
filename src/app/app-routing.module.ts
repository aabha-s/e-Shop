import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { AddDetailsComponent } from './components/add-details/add-details.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'add-details', component: AddDetailsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
