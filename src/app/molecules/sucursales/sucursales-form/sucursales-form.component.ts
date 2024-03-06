import { Location } from '@angular/common';
import {
  Component,
  EventEmitter,
  ElementRef,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, MaxLengthValidator } from '@angular/forms';
import { MonedasService } from 'src/app/services/monedas.service';
import { SucursalesService } from 'src/app/services/sucursales.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sucursales-form',
  templateUrl: './sucursales-form.component.html',
  styleUrls: ['./sucursales-form.component.css']
})
export class SucursalesFormComponent implements OnInit{
  @Input() tipoForm!: number;
  @Input() dataSeleccionada!: any;
  @Output() dataEmitida: EventEmitter<any> = new EventEmitter();

  pagina!: any;

  form!: FormGroup;
  dataCampos: any = {
    dataBin: {
      codigo: { nombre: 'codigo', descripcion: 'Codígo', editable: true, disable: true, items: [{}] },
      descripcion: { nombre: 'descripcion', descripcion: 'Descripción', editable: true, disable: false, items: [{}] },
      direccion: { nombre: 'direccion', descripcion: 'Dirección', editable: true, disable: false, items: [{}] },
      identificacion: { nombre: 'identificacion', descripcion: 'Identificación', editable: true, disable: false, items: [{}] },
      fechaCreacion: { nombre: 'fechaCreacion', descripcion: 'Fechas de creación', editable: true, disable: false, items: [{}] },
      moneda:{nombre: 'moneda', descripcion: 'Moneda', editable: true, disable: false, items: [{}] }
    }
  };
  listaEstadosRoles!: any[];
  listaPermisosAsignados: any[] = [];


  constructor(
    private readonly fb: FormBuilder,
    private readonly location: Location,
    private readonly sucursalesService: SucursalesService,
    private readonly monedasService: MonedasService,
  ) {
    this.form = this.fb.group({
      codigo: ['0', [Validators.required]],
      descripcion: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      fechaCreacion: ['', [Validators.required]],
      moneda: ['',[Validators.required]],
    });
  }


  async ngOnInit() {
    
    if (this.tipoForm == 1) {
      this.dataCampos.dataBin.codigo.disable = true;
    }

    this.pagina = {
      ...this.pagina,
      btnAccion: {
        texto: this.tipoForm == 0 ? 'Crear Sucursal' : ' Editar Sucursal',
        evento: () => {
          this.enviarData();
        },
      },
    };

    if (this.dataSeleccionada != undefined) {
      this.cargaDataForm();
    }
    await this.getMonedas();
  }

  getFormControl(formControl: string) {
    return this.form.get(formControl) as FormControl
  }
  
  async getMonedas() {
    this.monedasService.getMonedas().subscribe({next:(res:any)=>{
      this.dataCampos.dataBin.moneda.items = res;
    }})
  }

  back() {
    this.location.back();
  }

  cargaDataForm() {
    if (this.tipoForm != 0 && this.dataSeleccionada != undefined) {
      for (const campo in this.dataSeleccionada) {
        if (this.form.get(campo)) {
          this.form.get(campo)?.setValue(this.dataSeleccionada[campo]);
        }
      }
    }
    this.form.patchValue({
      fechaCreacion: this.dataSeleccionada.fechaCreacion.split('T')[0],
      moneda: this.dataSeleccionada.monedaId
    })
  }

  enviarData() {
    const data = this.form.value;
    console.log('Data', data);
    data.monedaId = data.moneda;
    data.moneda = null;
    if (this.form.valid) {
      if (this.tipoForm == 0) {
        data.codigo = '0'
        this.dataEmitida.emit(data);
        this.sucursalesService.createSucursal(data).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: "Bien!",
              text: "La sucursal fue creada correctamente",
              icon: "success"
            });
            this.back();
          },
          error: (error: any) => {
            Swal.fire({
              title: "Error",
              text: "La sucursal no fue creada "+error,
              icon: "error"
            });
          }
        })
      } else {
        
        this.sucursalesService.updateSucursal(data.codigo, data).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: "Bien!",
              text: "La sucursal fue actualizada correctamente",
              icon: "success"
            });
            this.back();
          },
          error: (error: any) => {
            Swal.fire({
              title: "Error",
              text: "La sucursal no fue actualizado "+error,
              icon: "error"
            });
          }
        })
      }
    } else {
      for (const key of Object.keys(this.form.controls)) {
        if (this.form.controls[key].invalid) {
          Swal.fire({
            title: "Error",
            text: "El campo " + key + " esta vacio o no tiene un formato valido",
            icon: "error"
          });
        }
      }
    }
  }
}
