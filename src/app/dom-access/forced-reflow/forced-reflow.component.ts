import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { createItems } from '../../shared/util';

@Component({
  selector: 'pp-forced-reflow',
  standalone: true,
  imports: [CommonModule],
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
    .label {
      transform-origin: left;
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

    const labels = document.querySelectorAll<HTMLElement>('.label');
    const bars = document.querySelectorAll<HTMLElement>('.bar');
    // set new fontSize
    labels.forEach(label => {
      /*const nativeElement = item.nativeElement;
      const label: HTMLElement = nativeElement.querySelector('.label') as HTMLElement;*/
      label.style.fontSize = fontSize;
    });

    // determine largest label
    labels.forEach(label => {
      largest = Math.max(largest, (label.firstChild as HTMLElement).offsetWidth + 5);
    });

    // align bars to largest label
    bars.forEach(bar => {
      bar.style.left = `${largest}px`;
    });


    this.duration = performance.now() - start;
    this.cdRef.detectChanges();
  }

  animateSuperFast(): void {
    const start = performance.now();
    let largest = 0;
    this.fat = !this.fat;
    const scale = this.fat ? 1.25 : 1;

    // set new fontSize
    this.menuItems.forEach(item => {
      const nativeElement = item.nativeElement;
      const label: HTMLElement = nativeElement.querySelector('.label') as HTMLElement;
      label.style.transform = `scale(${scale})`
    });

    // determine largest label
    this.menuItems.forEach(item => {
      const nativeElement = item.nativeElement;
      const label: HTMLElement = nativeElement.querySelector('.label') as HTMLElement;
      largest = Math.max(largest, ((label.firstChild as HTMLElement).offsetWidth + 5) * scale);
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

}
