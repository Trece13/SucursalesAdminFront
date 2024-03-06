import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SucursalesService } from 'src/app/services/sucursales.service';

@Component({
  selector: 'app-sucursales-modificar',
  templateUrl: './sucursales-modificar.component.html',
  styleUrls: ['./sucursales-modificar.component.css'],
})
export class SucursalesModificarComponent {
  pagina: any = {
    tipo: 1,
    titulo: 'Editar Sucursal',
  };

  parametros!: any;
  registro!: any;

  public stateFilterTrigger: boolean = true;
  public buttonsFilter = {
    return: { icon: 'Arrow_Left_SM.svg', active: true },
    filter: { icon: 'Filter.svg', active: false },
  };

  constructor(
    private route: ActivatedRoute,
    private readonly sucursalService: SucursalesService,
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.getSucursal();
  }

  getParams() {
    this.route.params.subscribe({
      next: (params: any) => {
        this.parametros = params;
      }
    });
  }

  getSucursal() {
    this.sucursalService.getSucursalById(this.parametros.id).subscribe({
      next: (res: any) => {
        console.log('res busqueda por id:',res);
        this.registro = res;
      }
    });
  }


  recibirData(data: any) {
    //TODO
  }
}


