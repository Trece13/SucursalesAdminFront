import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucursalesLayoutComponent } from './sucursales-layout/sucursales-layout.component';
import { SucursalesListComponent } from './sucursales-list/sucursales-list.component';
import { SucursalesCrearComponent } from './sucursales-crear/sucursales-crear.component';
import { SucursalesModificarComponent } from './sucursales-modificar/sucursales-modificar.component';

const routes: Routes = [
  {
    path: '',
    component: SucursalesLayoutComponent,
    children: [
      { path: 'lista', component: SucursalesListComponent },
      { path: 'crear', component: SucursalesCrearComponent },
      { path: 'modificar/:id', component: SucursalesModificarComponent },
      { path: '**', redirectTo: 'lista' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucursalesRoutingModule {}
