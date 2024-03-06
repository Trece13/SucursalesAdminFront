import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SucursalesRoutingModule } from './sucursales-routing.module';
import {SucursalesCrearComponent } from './sucursales-crear/sucursales-crear.component';
import {SucursalesListComponent } from './sucursales-list/sucursales-list.component';
import {SucursalesModificarComponent } from './sucursales-modificar/sucursales-modificar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoleculesModule } from 'src/app/molecules/molecules.module';
import { AtomsModule } from '../../atoms/atoms.module';
import { SucursalesLayoutComponent } from './sucursales-layout/sucursales-layout.component';

@NgModule({
    declarations: [
        SucursalesCrearComponent,
        SucursalesModificarComponent,
        SucursalesListComponent,
        SucursalesLayoutComponent
    ],
    imports: [
        CommonModule,
        SucursalesRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MoleculesModule,
        AtomsModule
    ]
})
export class SucursalesModule {}
