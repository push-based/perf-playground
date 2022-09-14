import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pp-reduce-iterations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reduce-iterations.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReduceIterationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
