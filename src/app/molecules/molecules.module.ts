import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SucursalesFormModule } from './sucursales/sucursales-form/sucursales-form.module';
import { SucursalesTableModule } from './sucursales/sucursales-table/sucursales-table.module';
import { AtomsModule } from '../atoms/atoms.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  imports: [
    AtomsModule,
    ReactiveFormsModule,
    SucursalesFormModule,
    SucursalesTableModule,
    SidebarModule
  ],
  exports: [
    AtomsModule,
    ReactiveFormsModule,
    SucursalesFormModule,
    SucursalesTableModule,
    SidebarModule
  ]
})
export class MoleculesModule { }
