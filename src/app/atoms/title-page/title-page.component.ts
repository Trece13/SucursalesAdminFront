import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css'],
})
export class TitlePageComponent {
  @Input() titlePage: any;
  @Input() size!: number | undefined;
}
