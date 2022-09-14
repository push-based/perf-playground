import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pp-avoid-nested-loops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avoid-nested-loops.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvoidNestedLoopsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
