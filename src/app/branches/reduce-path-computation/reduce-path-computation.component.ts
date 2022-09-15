import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toDictionary } from '@rx-angular/cdk/transformations';
import { createItems, Item, measureOperations } from '../../shared/util';

@Component({
  selector: 'pp-reduce-path-computation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reduce-path-computation.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReducePathComputationComponent {

  value = 100;
  complexity = 100;
  duration = 1000;

  nonOptimisedRuntime?: number;
  optimisedRuntime?: number;

  constructor(
    private cdRef: ChangeDetectorRef
  ) {}

  setValue(amount: string): void {
    this.value = parseInt(amount);
  }

  setComplexity(amount: string): void {
    this.complexity = parseInt(amount);
  }

  start(): void {
    this.nonOptimisedRuntime =
      measureOperations(this.nonOptimised.bind(this), this.duration);
    this.optimisedRuntime =
      measureOperations(this.optimised.bind(this), this.duration);
    this.cdRef.detectChanges();
  }

  private nonOptimised(): void {
    if (
      this.complexComparison() ||
      this.value <= 100
    ) {
      this.work();
    }
  }

  private optimised(): void {
    if (
      this.value <= 100 ||
      this.complexComparison()
    ) {
      this.work();
    }
  }

  private work(): boolean {
    return Math.random() * 100 % 2 === 0;
  }

  private complexComparison(): boolean {
    let result = false;
    for (let i = 0; i <= this.complexity; i++) {
      result = i >= this.complexity;
    }
    return result;
  }


}
