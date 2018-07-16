import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigateBarComponent } from './navigate-bar/navigate-bar.component';
import { HomeComponent } from './home/home.component';
import { TransTabNamePipe } from './TransTabNamePipe';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigateBarComponent,
    HomeComponent,
    TransTabNamePipe,
    CatalogComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
