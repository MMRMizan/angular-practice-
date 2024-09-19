import { Component, OnInit } from '@angular/core';
import { ReuseComponent } from '../reuse-component/reuse.component';
@Component({
  selector: 'child-component',
  standalone: true,
  templateUrl: './child.component.html',
  imports: [ReuseComponent]
})
export class ChildComponent implements OnInit {
  title="";
  subtitle="";
  iconUrl ="";
  className="";

  ngOnInit() {
      this.title="Reusable component title from child component";
      this.subtitle="Reusable component subtitle from child component";
      this.iconUrl = "https://img.icons8.com/?size=80&id=AqUNZvhJiaKK&format=png";   
      this.className="";
  }
}
