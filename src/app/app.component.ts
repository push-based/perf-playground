import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div class="sidebar">
      <h2 class="group-title">Looping</h2>
      <a class="nav-item"
         routerLinkActive="active"
         [routerLink]="['/looping/types-of-loops']">
        Types of Loops
      </a>
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
      <h2 class="group-title">Data Structures</h2>
      <a class="nav-item"
         routerLinkActive="active"
         [routerLink]="['/data-structures/read-operations']">
        Read Access
      </a>
      <a class="nav-item"
         target="_blank"
         href="https://csb-yuu1dm.netlify.app/">
        Map vs Object
      </a>
      <h2 class="group-title">Branches</h2>
      <a class="nav-item"
         routerLinkActive="active"
         [routerLink]="['/branches/reduce-path-computation']">
        Path complexity
      </a>
      <a class="nav-item"
         routerLinkActive="active"
         [routerLink]="['/branches/branchless-programming']">
        Branchless Programming
      </a>
    </div>
    <div class="main">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      padding: .5rem 0;
    }
    .main {
      flex-grow: 1;
      padding-left: .5rem;
    }
    .main h1 {
      margin-top: 0;
    }
    .sidebar {
      display: flex;
      flex-direction: column;
    }
    .group-title {
      margin: 0 0 .75rem 0;
    }
    .nav-item {
      padding: .5rem 1rem;
    }
    .nav-item.active {
      background-color: rgba(0,0,0, .08);
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
