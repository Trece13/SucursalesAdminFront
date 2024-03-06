import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { SucursalesFormComponent } from './sucursales-form.component';



@NgModule({
  declarations: [
    SucursalesFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AtomsModule
  ],
  exports: [
    SucursalesFormComponent
  ]
})
export class SucursalesFormModule { }
