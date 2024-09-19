import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'reuse-component',
  standalone: true,
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.css'],
  imports:[CommonModule]
})



export class ReuseComponent {
  @Input() Title: String | undefined;
  @Input() SubTitle: String | undefined;
  @Input() Icon: String | undefined;
  @Input() className: string |undefined;


  name = 'Angular';
  ngOnInit(){
//    console.log("Hello",this.className);

  }
}
