import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'child-component',
  standalone: true,
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  //@Input

  ngOnInit() {}
}
