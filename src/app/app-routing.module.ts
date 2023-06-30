import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AuthGuard } from './helpers/auth.guard.service';

const accountModule = () => import("./account/account.module").then(x => x.AccountModule);

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'favourites', component: FavouritesComponent, canActivate:[AuthGuard] },
  { path: 'account', loadChildren: accountModule },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
