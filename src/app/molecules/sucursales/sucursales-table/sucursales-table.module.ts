import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SucursalesTableComponent } from './sucursales-table.component';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { SucursalesRoutingModule } from 'src/app/pages/sucursales/sucursales-routing.module';

@NgModule({
  declarations: [
    SucursalesTableComponent
  ],
  imports: [
    CommonModule,
    SucursalesRoutingModule,
    MaterialModule,
    AtomsModule
  ],
  exports: [
    SucursalesTableComponent
  ]
})
export class SucursalesTableModule { }
