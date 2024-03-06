import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalesService } from 'src/app/services/sucursales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursales-table',
  templateUrl: './sucursales-table.component.html',
  styleUrls: ['./sucursales-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SucursalesTableComponent implements OnInit {


  @ViewChild('atomInput') atomInput: ElementRef;

  public title: any = "Sucursales";

  public btnCreate = {
    text: '',
    type: 'create',
    locked: false,
    label: 'add',
  };

  public btnUpdate = {
    text: '',
    type: 'update',
    locked: true,
    label: 'edit',
  };

  public btnDelete = {
    text: '',
    type: 'update',
    locked: true,
    label: 'delete',
  };

  public clickSelected: any = {
    click: "",
    data: null
  }

  //Variables de la tabla
  @Input() dataTable: any;
  public titles: any = [];
  private dataCheckBox: any;

  constructor(private readonly router: Router, public sucursalService: SucursalesService) {
    this.atomInput = new ElementRef<any>(null);
  }

  ngOnInit(): void {
    console.log(this.dataTable)
    this.titles = {
      "titulos": ["", "Código", "Descripción", "Dirección", "Identificación", "Fecha de creación", "Moneda"]
    }
  }

  create() {
    this.clickSelected.click = "crear";
    this.clickSelected.data = null;

    this.router.navigate(['/Sucursales/crear']);
  }

  edit() {
    this.clickSelected.click = "editar";
    this.clickSelected.data = null;
    const codigo = this.dataCheckBox.id;
    this.router.navigate(['/Sucursales/modificar', codigo]);
  }

  delete() {
    this.clickSelected.click = "eliminar";
    this.clickSelected.data = null;
    const codigo = this.dataCheckBox.id;
    this.sucursalService.deleteSucursal(codigo).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: "Bien!",
          text: "La sucursal fue Eliminada corectamente",
          icon: "success"
        });
        setTimeout(() => {
          location.reload()
        }, 1500);
      }, error: (error: any) => {
        Swal.fire({
          title: "Error!",
          text: "La sucursal no fue eliminada",
          icon: "error"
        });
      }
    })
  }

  selectedCehckBox(item: any) {
    this.dataCheckBox = item;
    this.btnUpdate.locked = this.dataCheckBox.locked;
    this.btnDelete.locked = this.dataCheckBox.locked;
  }
}