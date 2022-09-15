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
  branchlessRuntime?: number;

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
  )

  constructor(
    private cdRef: ChangeDetectorRef
  ) {}

  start(): void {
    const value = randomIntFromInterval(0, 6);
    this.name = this.names[value];
    this.withBranchesRuntime =
      measureOperations(this.withBranches.bind(this), this.duration);
    this.branchlessRuntime =
      measureOperations(this.branchless.bind(this), this.duration);
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

  private branchless(): string {
    return this.preparedMap.get(this.name) as string;
  }

  private work(): boolean {
    return Math.random() * 100 % 2 === 0;
  }

}
