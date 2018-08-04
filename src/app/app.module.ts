import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MyPropertyBindingComponent } from './my-property-binding/my-property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MyPropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
