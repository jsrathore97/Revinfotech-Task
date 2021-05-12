import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-case-example',
  templateUrl: './upper-case-example.component.html',
  styleUrls: ['./upper-case-example.component.css']
})
export class UpperCaseExampleComponent implements OnInit {
  listArray:any;
  constructor() { }

  ngOnInit(): void {
    this.listArray = [
          { name : 'xyx'},
          { name : 'yxz'},
          { name : 'zxy'}
    ]
  
  }


  
}
