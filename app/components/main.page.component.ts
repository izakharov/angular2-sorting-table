import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mp-main-page',
  template: `
    <h2>Mini - project (for Mango Technologies)</h2>
    <mp-tasks></mp-tasks>
  `,
  styles: [':host > h2 { text-align: center }']
})
export class MainPageComponent { }
