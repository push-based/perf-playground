import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div class="sidebar">
      <div class="group-title">Looping</div>
      <a class="nav-item"
         routerLinkActive="active"
         [routerLink]="['/looping/property-lookups-reversing']">
        Property Lookups & Reversing
      </a>
      <a class="nav-item"
         routerLinkActive="active"
         [routerLink]="['/looping/avoid-nested-loops']">
        Avoid Nested Loops
      </a>
      <a class="nav-item"
         routerLinkActive="active"
         [routerLink]="['/looping/reduce-iterations']">
        Reduce Number of Iterations
      </a>
      <a class="nav-item"></a>
      <a class="nav-item"></a>
      <a class="nav-item"></a>
    </div>
    <div class="main">
      <h1>Push based workshop perf playground</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
    }
    .main {
      flex-grow: 1;
    }
    .sidebar {
      display: flex;
      flex-direction: column;
    }
    .nav-item {
      padding: .5rem 1rem;
    }
    .nav-item:hover {
      background-color: rgba(0,0,0, .12);
    }
  `],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'perf-playground';

  constructor(router: Router, cdRef: ChangeDetectorRef) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => cdRef.detectChanges())
  }
}
