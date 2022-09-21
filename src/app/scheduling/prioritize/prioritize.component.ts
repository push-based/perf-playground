import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetModule } from '@rx-angular/template';
import { BehaviorSubject } from 'rxjs';
import { WorkComponent } from '../../shared/work.component';

@Component({
  selector: 'pp-prioritize',
  standalone: true,
  imports: [CommonModule, WorkComponent, LetModule],
  templateUrl: './prioritize.component.html',
  styles: [`
    .container {
      display: grid;
      width: auto;
      max-width: 640px;
      height: 500px;
      grid:
        'sidebar  header' 64px
        'sidebar  content' 1fr
        'sidebar  footer' 64px /
        150px     1fr;

    }
    .sidebar {
      outline: 1px solid black;
      grid-area: sidebar;
      justify-items: center;
      overflow: hidden;
    }
    .header {
      outline: 1px solid black;
      grid-area: header;
      justify-items: center;
      overflow: hidden;
    }
    .content {
      outline: 1px solid black;
      grid-area: content;
      justify-items: center;
      overflow: hidden;
    }
    .footer {
      outline: 1px solid black;
      grid-area: footer;
      justify-items: center;
      overflow: hidden;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrioritizeComponent {

  initialWork = parseInt(localStorage.getItem('pp.prioritize-work') || '300');

  sidebarWork$ = new BehaviorSubject<number>(this.initialWork * 2);
  headerWork$ = new BehaviorSubject<number>(this.initialWork);
  contentWork$ = new BehaviorSubject<number>(this.initialWork * 3);
  footerWork$ = new BehaviorSubject<number>(this.initialWork);

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  setWork(work: string) {
    localStorage.setItem('pp.prioritize-work', work);
    const iWork = parseInt(work);
    this.sidebarWork$.next(iWork * 2);
    this.headerWork$.next(iWork);
    this.contentWork$.next(iWork * 3);
    this.footerWork$.next(iWork);
    this.cdRef.detectChanges();
  }

}
