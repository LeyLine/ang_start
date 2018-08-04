import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-event-binding",
  template: `
        <label>Input: </label>
        <input (keyup)="recordAllTheKeyStrokes($event)">
    `
})
export class MyEventBindingComponent {
  recordAllTheKeyStrokes(event) {
    console.log(`Key inserted: ${event.key}`);
    //console.log(`Input value: ${event.currentTarget.value}`);
  }

  ngOnInit() {
  }
}
