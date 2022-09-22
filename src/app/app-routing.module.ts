import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'looping',
    children: [
      {
        path: '',
        redirectTo: 'types-of-loops',
        pathMatch: 'full'
      },
      {
        path: 'types-of-loops',
        loadComponent: () => import('./looping/types-of-loops/types-of-loops.component').then(
          m => m.TypesOfLoopsComponent
        )
      },
      {
        path: 'property-lookups-reversing',
        loadComponent: () => import('./looping/property-lookups-reversing/property-lookups-reversing.component').then(
          m => m.PropertyLookupsReversingComponent
        )
      },
      {
        path: 'avoid-nested-loops',
        loadComponent: () => import('./looping/avoid-nested-loops/avoid-nested-loops.component').then(
          m => m.AvoidNestedLoopsComponent
        )
      },
      {
        path: 'reduce-iterations',
        loadComponent: () => import('./looping/reduce-iterations/reduce-iterations.component').then(
          m => m.ReduceIterationsComponent
        )
      }
    ]
  },
  {
    path: 'data-structures',
    children: [
      {
        path: 'map-vs-object',
        loadComponent: () => import('./data-structures/map-vs-object/map-vs-object.component').then(m => m.MapVsObjectComponent)
      },
      {
        path: 'read-operations',
        loadComponent: () => import('./data-structures/read-operations/read-operations.component').then(m => m.ReadOperationsComponent)
      }
    ]
  },
  {
    path: 'branches',
    children: [
      {
        path: 'branchless-programming',
        loadComponent: () => import('./branches/branchless-programming/branchless-programming.component').then(m => m.BranchlessProgrammingComponent)
      },
      {
        path: 'reduce-path-computation',
        loadComponent: () => import('./branches/reduce-path-computation/reduce-path-computation.component').then(m => m.ReducePathComputationComponent)
      }
    ]
  },
  {
    path: 'scheduling',
    children: [
      {
        path: 'prioritize',
        loadComponent: () => import('./scheduling/prioritize/prioritize.component').then(m => m.PrioritizeComponent)
      }
    ]
  },
  {
    path: 'dom-access',
    children: [
      {
        path: 'forced-reflow',
        loadComponent: () => import('./dom-access/forced-reflow/forced-reflow.component').then(m => m.ForcedReflowComponent)
      },
      {
        path: 'reduce-path-computation',
        loadComponent: () => import('./branches/reduce-path-computation/reduce-path-computation.component').then(m => m.ReducePathComputationComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/looping/types-of-loops',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
