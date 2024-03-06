import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucursales-crear',
  templateUrl: './sucursales-crear.component.html',
  styleUrls: ['./sucursales-crear.component.css'],
})
export class SucursalesCrearComponent implements OnInit {
  pagina: any = {
    tipo: 0,
    titulo: 'Crear Sucursal',
  };

  public stateFilterTrigger: boolean = true;

  ngOnInit(): void {
    // TODO
  }

  recibirData(data: any) {}
}
