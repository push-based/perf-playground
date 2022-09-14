import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pp-reduce-path-computation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reduce-path-computation.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReducePathComputationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
