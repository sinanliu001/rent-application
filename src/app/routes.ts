import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home } from './home/home';
import { Details } from './details/details';

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Home details',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

export const routes = routeConfig;
