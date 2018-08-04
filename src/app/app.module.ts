import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MyPropertyBindingComponent } from './my-property-binding/my-property-binding.component';
import { MyEventBindingComponent } from './my-event-binding/my-event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MyPropertyBindingComponent,
    MyEventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
