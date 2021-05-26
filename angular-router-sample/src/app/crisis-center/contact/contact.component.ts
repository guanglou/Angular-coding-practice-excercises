import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <p>
      contact works from the <b>child route</b>!
    </p>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Contact Compo 111...');
  }

}
