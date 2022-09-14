import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pp-branchless-programming',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branchless-programming.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BranchlessProgrammingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
