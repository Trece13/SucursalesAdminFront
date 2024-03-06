import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { SucursalesTableTitleComponent } from './sucursales/sucursales-table-title/sucursales-table-title.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { SucursalesTableContentComponent } from './sucursales/sucursales-table-content/sucursales-table-content.component';

@NgModule({
  declarations: [
    FormFieldComponent,
    ButtonComponent,
    SucursalesTableTitleComponent,
    SucursalesTableContentComponent,
    TitlePageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    FormFieldComponent,
    ButtonComponent,
    SucursalesTableTitleComponent,
    SucursalesTableContentComponent,
    TitlePageComponent
  ],
})
export class AtomsModule {}
