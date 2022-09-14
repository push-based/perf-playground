import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pp-read-operations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-operations.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadOperationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
