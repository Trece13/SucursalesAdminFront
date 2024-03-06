import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sucursales-table-title',
  templateUrl: './sucursales-table-title.component.html',
  styleUrls: ['./sucursales-table-title.component.css']
})
export class SucursalesTableTitleComponent {

  @Input() getTitleTable: any;

}
