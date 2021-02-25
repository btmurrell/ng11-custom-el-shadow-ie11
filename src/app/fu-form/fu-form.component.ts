import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'fu-form',
  templateUrl: './fu-form.component.html',
  styleUrls: ['./fu-form.component.scss']
  ,encapsulation: ViewEncapsulation.ShadowDom
})
export class FuFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
