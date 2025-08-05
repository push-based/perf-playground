import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';

import { createItems } from '../../shared/util';

@Component({
    selector: 'pp-forced-reflow',
    imports: [],
    templateUrl: './forced-reflow.component.html',
    styles: [`
    .container {
      margin-top: 16px;
      overflow: auto;
      height: 500px;
    }
    .menu {
      position: relative;
      padding: 1rem;
      border: 2px dotted green;
    }
    .item {
      height: 16px;
      position: relative;
      display: flex;
      align-items: center;
      padding: .25rem;
      font-variant-numeric: tabular-nums;
    }
    .bar {
      background-color: cadetblue;
      width: 150px;
      left: 42px;
      height: 16px;
      position: absolute;
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForcedReflowComponent {

  @ViewChildren('menuItem')
  menuItems!: QueryList<ElementRef<HTMLElement>>;

  items = createItems(250).map(item => ({
    ...item,
    width: item.value * 400,
    value: (item.value * 400).toString().substring(0, 5)
  }));

  duration = 0;

  private fat = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  animateSlow(): void {
    const start = performance.now();
    let largest = 0;
    this.fat = !this.fat;
    const fontSize = this.fat ? '20px' : '16px';
    // update fontSize and determine largest label
    this.menuItems.forEach(item => {
      const nativeElement = item.nativeElement;
      const label: HTMLElement = nativeElement.querySelector('.label') as HTMLElement;
      label.style.fontSize = fontSize;
      largest = Math.max(largest, (label.firstChild as HTMLElement).offsetWidth + 5);
    });

    // align bars to largest label
    this.menuItems.forEach(item => {
      const nativeElement = item.nativeElement;
      const bar: HTMLElement = nativeElement.querySelector('.bar') as HTMLElement;
      bar.style.left = `${largest}px`;
    });
    this.duration = performance.now() - start;
    this.cdRef.detectChanges();
  }

  animateFast(): void {
    const start = performance.now();
    let largest = 0;
    this.fat = !this.fat;
    const fontSize = this.fat ? '20px' : '16px';


    this.duration = performance.now() - start;
    this.cdRef.detectChanges();
  }

  animateSuperFast(): void {
    const start = performance.now();
    let largest = 0;
    this.fat = !this.fat;
    const scale = this.fat ? 1.25 : 1;


    this.duration = performance.now() - start;
    this.cdRef.detectChanges();
  }

}
