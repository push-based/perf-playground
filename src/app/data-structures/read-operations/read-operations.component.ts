import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { toDictionary } from '@rx-angular/cdk/transformations';
import { createItems, Item, measureOperations } from '../../shared/util';

@Component({
    selector: 'pp-read-operations',
    imports: [],
    templateUrl: './read-operations.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadOperationsComponent {

  @ViewChild('idInput', { static: true }) idInput!: ElementRef<HTMLInputElement>;

  items: Item[] = [];
  itemTable: Record<string, Item> = {};

  initialValue = '100';
  duration = 1000;

  arrayFindRuntime?: number;
  lookupTableRuntime?: number;

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
    this.setItems(this.initialValue);
  }

  setItems(amount: string): void {
    this.items = createItems(parseInt(amount));
  }

  start(): void {
    this.arrayFindRuntime =
      measureOperations(this.arrayFind.bind(this), this.duration);
    this.lookupTableRuntime =
      measureOperations(this.lookupTable.bind(this), this.duration);
    this.cdRef.detectChanges();
  }

  private arrayFind(): void {
    const id = this.getId();
    const item = this.items.find(item => item.id === id);
    if (item) {
      this.work(item);
    }
  }

  private lookupTable(): void {
    const id = this.getId();
  }

  private getId(): number {
    return Math.min(
      parseInt(this.idInput.nativeElement.value),
      this.items.length
    );
  }

  private work(item: Item): boolean {
    return item.id % 2 === 0;
  }

}
