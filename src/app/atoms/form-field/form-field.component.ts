import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {
  @Input() onSelectChange!: (event: any) => void;
  @Input() tipo!: string;
  @Input() control!: FormControl;
  @Input() campo!: any;

  constructor() {}
}
