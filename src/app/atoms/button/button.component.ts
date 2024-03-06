import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() getSettingsButton: any;
  @Output() emitterClickButton: EventEmitter<any> = new EventEmitter();

  public settingButtonDefalut: any = {
    text: '',
    type: '',
    filter: false,
    locked: false,
    label: '',
    out: false,
  };

  public typesButtoms: any = {
    '': 'btn-azul',
  };

  ngOnInit(): void {
    this.inicializateValues();
  }

  inicializateValues() {
    this.settingButtonDefalut.text = this.getSettingsButton.text;
    this.settingButtonDefalut.type =
    this.typesButtoms[this.getSettingsButton.type];
    this.settingButtonDefalut.filter = this.getSettingsButton.filter;
    this.settingButtonDefalut.locked = this.getSettingsButton.locked;
    this.settingButtonDefalut.label = this.getSettingsButton.label;
    this.settingButtonDefalut.out = this.getSettingsButton.out;
  }

  clickButton(): void {
    this.emitterClickButton.emit();
  }
}
