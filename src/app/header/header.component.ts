import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
date:any;
intervalId:any;
  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.date = new Date();
    }, 1000);
    
  }

}
