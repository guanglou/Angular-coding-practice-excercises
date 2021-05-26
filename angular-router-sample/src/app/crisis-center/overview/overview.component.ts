import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      overview works  from the <b>child route</b>!
    </p>
  `,
  styles: [
  ]
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Overview Compo 222...')
  }

}
