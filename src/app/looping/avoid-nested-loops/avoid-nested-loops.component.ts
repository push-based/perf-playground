import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toDictionary } from '@rx-angular/cdk/transformations';
import { createItems, Item, measureOperations } from '../../shared/util';

@Component({
  selector: 'pp-avoid-nested-loops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avoid-nested-loops.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvoidNestedLoopsComponent {

  items: Item[] = [];
  childItems: Item[] = [];

  initialValue = '100';
  duration = 1000;

  nestedLoopRuntime?: number;
  lookupTableLoopRuntime?: number;

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
    this.setItems(this.initialValue);
  }

  setItems(amount: string): void {
    this.items = createItems(parseInt(amount));
    this.childItems = createItems(parseInt(amount));
  }

  start(): void {
    this.nestedLoopRuntime =
      measureOperations(this.nestedLoop.bind(this), this.duration);
    this.lookupTableLoopRuntime =
      measureOperations(this.lookupTableLoop.bind(this), this.duration);
    this.cdRef.detectChanges();
  }

  private nestedLoop(): void {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const child = this.childItems.find(child => child.id === item.refItem);
      this.work(child as Item);
    }
  }

  private lookupTableLoop(): void {
    const childTable = toDictionary(this.childItems, 'id');
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const child = childTable[item.refItem];
      this.work(child);
    }
  }

  private work(item: Item): boolean {
    return item.id % 2 === 0;
  }

}
