import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toDictionary } from '@rx-angular/cdk/transformations';
import { createItems, Item, measureOperations } from '../../shared/util';

@Component({
  selector: 'pp-reduce-iterations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reduce-iterations.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReduceIterationsComponent {

  items: Item[] = [];

  initialValue = '100';
  duration = 1000;

  multipleIterationsRuntime?: number;
  singleITerationRuntime?: number;

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
    this.setItems(this.initialValue);
  }

  setItems(amount: string): void {
    this.items = createItems(parseInt(amount));
  }

  start(): void {
    this.multipleIterationsRuntime =
      measureOperations(this.multipleIterations.bind(this), this.duration);
    this.singleITerationRuntime =
      measureOperations(this.singleIteration.bind(this), this.duration);
    this.cdRef.detectChanges();
  }

  private multipleIterations(): void {
    this.items.filter(
      item => this.work(item)
    ).map(item => item.value);
  }

  private singleIteration(): void {
    let mapped: Item[] = [];
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (this.work(item)) {
        mapped.push(item);
      }
    }
  }

  private work(item: Item): boolean {
    return item.id % 2 === 0;
  }

}
