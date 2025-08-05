import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'pp-work',
    imports: [],
    template: `
    @for (item of items; track item) {
      <div
      [style.background-color]="item"></div>
    }
    `,
    styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
    }
    div {
      height: 2px;
      width: 2px;
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent implements OnInit {

  items: string[] = [];

  @Input()
  set work(work: number) {
    this.items = new Array(work * 10).fill(null)
      .map(() => `#${Math.floor(Math.random()*16777215).toString(16)}`)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
