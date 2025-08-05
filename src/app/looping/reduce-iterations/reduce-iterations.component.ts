import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { toDictionary } from '@rx-angular/cdk/transformations';
import { createItems, Item, measureOperations } from '../../shared/util';

@Component({
    selector: 'pp-reduce-iterations',
    imports: [],
    templateUrl: './reduce-iterations.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReduceIterationsComponent {

  items: Item[] = [];

  initialValue = '100';
  duration = 1000;

  multipleIterationsRuntime?: number;
  singleIterationRuntime?: number;

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
    this.singleIterationRuntime =
      measureOperations(this.singleIteration.bind(this), this.duration);
    this.cdRef.detectChanges();
  }

  private multipleIterations(): number[] {
    return this.items.filter(
      item => this.work(item)
    ).map(item => item.value);
  }

  private singleIteration(): number[] {
    return [];
  }

  private work(item: Item): boolean {
    return item.id % 2 === 0;
  }

}
