import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChildComponent } from './child-component1/child.component';
import { ReuseComponent } from './reuse-component/reuse.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, ReuseComponent, CommonModule],
  styleUrls: ['./app.component.css'],

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
  title="";
  subtitle="";
  iconUrl ="";
  className="";

  ngOnInit(){
    this.title="Reusable component title from root component";
    this.subtitle="Reusable component subtitle from root component";
    this.iconUrl = "https://img.icons8.com/?size=77&id=PW1feE0crqsw&format=png";
    this.className="activeClass";
  };



}

bootstrapApplication(App);
