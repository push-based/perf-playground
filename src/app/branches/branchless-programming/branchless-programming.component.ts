import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { measureOperations, randomIntFromInterval } from '../../shared/util';

@Component({
  selector: 'pp-branchless-programming',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branchless-programming.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BranchlessProgrammingComponent {

  duration = 1000;

  withBranchesRuntime?: number;
  withBranchesLoopedRuntime?: number;
  branchlessRuntime?: number;
  branchlessLoopedRuntime?: number;

  private names = ['Rudolf', 'Maria', 'Ben', 'Sarah', 'Jon', 'Peter', 'Petra'];

  private name = '';

  private preparedBranches: Record<string, string> = {
    Rudolf: "Heya, Rudolf!",
    Maria: "Good Morning, Maria!",
    Ben: "How are you, Ben?",
    Sarah: "Welcome, Sarah.",
    Jon: "See you soon, Jon.",
    Peter: "Hey Peter",
    Petra: "Ciao Petra"
  };

  private preparedMap = new Map<string, string>(
    Object.entries(this.preparedBranches)
  );

  branches = 10;

  constructor(
    private cdRef: ChangeDetectorRef
  ) {}

  setBranches(amount: string) {
    this.branches = parseInt(amount);
  }

  start(): void {
    const value = randomIntFromInterval(0, 6);
    this.name = this.names[value];
    this.withBranchesRuntime =
      measureOperations(this.withBranches.bind(this), this.duration);
    this.branchlessRuntime =
      measureOperations(this.branchless.bind(this), this.duration);
    this.withBranchesLoopedRuntime =
      measureOperations(this.withBranchesLooped.bind(this), this.duration);
    this.branchlessLoopedRuntime =
      measureOperations(this.branchlessLooped.bind(this), this.duration);
    this.cdRef.detectChanges();
  }

  private withBranches(): string {
    const name = this.name;
    if (name === 'Rudolf') {
      return "Heya, Rudolf!";
    }
    if (name === 'Maria') {
      return "Good Morning, Maria!";
    }
    if (name === 'Ben') {
      return "How are you, Ben?";
    }
    if (name === 'Sarah') {
      return "Welcome, Sarah.";
    }
    if (name === 'Jon') {
      return "See you soon, Jon.";
    }
    if (name === 'Peter') {
      return "Hey Peter";
    } else {
      return "Ciao Petra";
    }
  }

  private withBranchesLooped(): string {
    let result = '';
    for(let i = 0; i <= this.branches; i++) {
      const value = randomIntFromInterval(0, 6);
      this.name = this.names[value];
      result = this.withBranches();
    }
    return result;
  }

  private branchless(): string {
    return this.preparedMap.get(this.name) as string;
  }

  private branchlessLooped(): string {
    let result = '';
    for(let i = 0; i <= this.branches; i++) {
      const value = randomIntFromInterval(0, 6);
      const name = this.names[value];
      result = this.preparedMap.get(name) as string;
    }
    return result;
  }

  private work(): boolean {
    return Math.random() * 100 % 2 === 0;
  }

}
