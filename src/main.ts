import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChildComponent } from './child-component1/child.component';
import { ReuseComponent } from './reuse-component/reuse.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, ReuseComponent],

  // template: `
  //   <h1>Hello from {{ name }}!</h1>
  //   <a target="_blank" href="https://angular.dev/overview">
  //     Learn more about Angular
  //   </a>
  // `,
  templateUrl: './app.component.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
