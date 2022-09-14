import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pp-map-vs-object',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-vs-object.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapVsObjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
