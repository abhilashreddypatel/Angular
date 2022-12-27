import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input('tempelem') element:{type:string,name:string,content:string};

}
