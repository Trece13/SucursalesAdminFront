import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Sucursales',
    loadChildren: () =>
      import('./pages/sucursales/sucursales.module').then((m) => m.SucursalesModule),
  },
  {
    path: '',
    redirectTo: 'Sucursales',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'Sucursales',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
