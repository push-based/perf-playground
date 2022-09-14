import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pp-property-lookups-reversing',
  templateUrl: './property-lookups-reversing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class PropertyLookupsReversingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
