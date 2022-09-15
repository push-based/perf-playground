import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { createItems, Item, measureOperations } from '../../shared/util';

@Component({
  selector: 'pp-types-of-loops',
  templateUrl: './types-of-loops.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class TypesOfLoopsComponent {

  items: Item[] = [];

  regularForRuntime?: number;
  functionalLoopRuntime?: number;
  whileRuntime?: number;
  forInRuntime?: number;
  forOfRuntime?: number;
  doWhileRuntime?: number;

  initialValue = '100000';
  duration = 1000;

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
    this.setItems(this.initialValue);
  }

  setItems(amount: string): void {
    this.items = createItems(parseInt(amount));
  }

  start(): void {
    this.functionalLoopRuntime =
      measureOperations(this.functionalLoop.bind(this), this.duration);
    this.regularForRuntime =
      measureOperations(this.regularFor.bind(this), this.duration);
    this.forInRuntime =
      measureOperations(this.forInLoop.bind(this), this.duration);
    this.forOfRuntime =
      measureOperations(this.forOfLoop.bind(this), this.duration);
    this.doWhileRuntime =
      measureOperations(this.doWhileLoop.bind(this), this.duration);
    this.whileRuntime =
      measureOperations(this.whileLoop.bind(this), this.duration);
    this.cdRef.detectChanges();
  }

  functionalLoop(): void {
    this.items.forEach(item => this.work(item));
  }

  regularFor(): void {
    for (let i = 0; i < this.items.length; i++) {
      this.work(this.items[i]);
    }
  }

  whileLoop(): void {
    let i = 0;
    while (i < this.items.length) {
      this.work(this.items[i]);
      i++;
    }
  }

  doWhileLoop(): void {
    let i = 0;
    do {
      this.work(this.items[i]);
      i++;
    } while (i < this.items.length);
  }

  forInLoop(): void {
    for (let i in this.items) {
      this.work(this.items[i]);
    }
  }

  forOfLoop(): void {
    for (let item of this.items) {
      this.work(item);
    }
  }

  work(item: Item): boolean {
    return item.id % 2 === 0;
  }

}
