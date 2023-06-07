import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomepageModule } from './homepage/homepage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomepageModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
