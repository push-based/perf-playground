import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { createItems, Item, measureOperations } from '../../shared/util';

@Component({
  selector: 'pp-property-lookups-reversing',
  templateUrl: './property-lookups-reversing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class PropertyLookupsReversingComponent {

  items: Item[] = [];

  originalLoopRuntime?: number;
  reducePropertyLookupsRuntime?: number;
  reducePropertyLookupsAndReverseRuntime?: number;

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
    this.reducePropertyLookupsAndReverseRuntime =
      measureOperations(this.reducePropertyLookupsAndReverse.bind(this), this.duration);
    this.originalLoopRuntime =
      measureOperations(this.originalLoop.bind(this), this.duration);
    this.reducePropertyLookupsRuntime =
      measureOperations(this.reducePropertyLookups.bind(this), this.duration);
    this.cdRef.detectChanges();
  }

  originalLoop(): void {
    for (let i = 0; i < this.items.length; i++) {
      this.work(this.items[i]);
    }
  }

  reducePropertyLookups(): void {
  }

  reducePropertyLookupsAndReverse(): void {
  }

  work(item: Item): number {
    return item.value * 2;
  }

}
