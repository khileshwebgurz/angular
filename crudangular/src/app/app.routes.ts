import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';

// we created an array of all routes here , it is similar to react-router-dom with BrowserRouter, Routes, Route.
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'counter', component: CounterComponent },
];
