import { SelectionModel } from '@angular/cdk/collections';
import { EventEmitter, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sucursales-table-content',
  templateUrl: './sucursales-table-content.component.html',
  styleUrls: ['./sucursales-table-content.component.css'],
})
export class SucursalesTableContentComponent implements OnInit {
  
  @Output() itemSelected: EventEmitter<any> = new EventEmitter();
  @Input() getContentTable: any;
  
  ngOnInit(): void {
    console.log( console.log(this.getContentTable))
  }
  selection = new SelectionModel<any>(true, []);

  public informationToSend: any = {
    locked: true,
    id: null,
  };

  private selectedIds: any = [];

  onCheckChange(id: any): void {
    this.selection.toggle(id);
  }

  selectedRecord(row: any) {
    this.selection.toggle(row);

    const validateId = this.validateIdSelected(row);

    const emmiter = this.registroSeleccionado(validateId);

    this.itemSelected.emit(emmiter);
  }

  registroSeleccionado(row: number) {
    this.informationToSend.locked = true;
    this.informationToSend.id = null;

    if (this.selection.selected.length === 1) {
      this.informationToSend.locked = false;
      this.informationToSend.id = row;
    }

    return this.informationToSend;
  }

  validateIdSelected(row: number): number {
    var sendrow = null;

    if (this.selectedIds.includes(row)) {
      this.selectedIds = this.selectedIds.filter((id: any) => id !== row);
    } else {
      this.selectedIds.push(row);
    }

    if (this.selectedIds.length === 1) {
      sendrow = this.selectedIds[0];
    } else {
      sendrow = null;
    }

    return sendrow;
  }
}
