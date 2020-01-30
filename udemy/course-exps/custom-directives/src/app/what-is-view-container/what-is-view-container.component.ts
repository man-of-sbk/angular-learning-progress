import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-what-is-view-container',
  templateUrl: './what-is-view-container.component.html',
  styleUrls: ['./what-is-view-container.component.css']
})
export class WhatIsViewContainerComponent implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    console.log(this.viewContainerRef)
  }
}
