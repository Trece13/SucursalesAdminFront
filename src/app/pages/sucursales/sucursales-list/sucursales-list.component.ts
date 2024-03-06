import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatPaginatorIntl,
} from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { SucursalesService } from 'src/app/services/sucursales.service';

@Component({
  selector: 'app-sucursales-list',
  templateUrl: './sucursales-list.component.html',
  styleUrls: ['./sucursales-list.component.css'],
})
export class SucursalesListComponent {
  displayedColumns: string[] = [
    'select',
    'Codigo',
    'Descripcion',
    'Direccion',
    'Identificacion',
    'FechaCreacion',
    'Moneda'
  ];
  dataSource: any = [];
  selection = new SelectionModel<any>(true, []);


  public btnCreate = {
    "text": "",
    "type": "create",
    "locked": false,
    "label":"add"
  }

  public btnUpdate = {
    "text": "",
    "type": "update",
    "locked": true
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null =
    null;
    hayData: boolean = false;
    

    dataPaginador: any = {
      length: 0,
      pageIndex: 0,
      pageSize: 5,
      itemsPage: 5,
      hidePageSize: false,
      showFirstLastButtons: true,
    };

  public stateFilterTrigger: boolean = true;
  fechaActual: any = formatDate(new Date(), 'dd-MM-yyyy', 'en-US');

  constructor(
    private readonly _liveAnnouncer: LiveAnnouncer,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly intl: MatPaginatorIntl,
    private readonly sucursalesService: SucursalesService,
    // private readonly storageService: StorageService
  ) {
    this.sort = new MatSort();
    this.paginator = new MatPaginator(this.intl, changeDetectorRef, {});
    this.paginator._intl.itemsPerPageLabel = 'Mostrar : ';
    this.paginator._intl.nextPageLabel = 'Siguiente';
    this.paginator._intl.previousPageLabel = 'Atrás';
    this.paginator._intl.firstPageLabel = 'Inicio';
    this.paginator._intl.lastPageLabel = 'Final';
  }

  ngOnInit(): void {
    this.getSucursales();
  }

  getSucursales() {
    let params: any[] = [
      {
        clave: 'size',
        valor: this.dataPaginador.pageSize,
      },
      {
        clave: 'page',
        valor: this.dataPaginador.pageIndex + 1,
      },
    ];
    this.sucursalesService.getSucursales().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }

  registroSeleccionado() {
    let seleccionado = false;
    this.btnUpdate.locked = true;

    if (this.selection.selected.length === 1) {
      seleccionado = true;
      this.btnUpdate.locked = false
    }

    return seleccionado;
  }

  selectedRecord(row: any) {
    this.selection.toggle(row);
    this.registroSeleccionado();
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

}
