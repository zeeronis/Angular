import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NaviagtionBarComponent } from './naviagtion-bar/naviagtion-bar.component';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AltarComponent } from './altar/altar.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'altar', component: AltarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NaviagtionBarComponent,
    HomeComponent,
    HeroesComponent,
    AltarComponent
  ],
  imports: [
    BrowserModule, RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
