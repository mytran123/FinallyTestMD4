import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeListComponent } from './components/awesomes/awesome-list/awesome-list.component';
import { AwesomeCreateComponent } from './components/awesomes/awesome-create/awesome-create.component';
import { AwesomeUpdateComponent } from './components/awesomes/awesome-update/awesome-update.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    AwesomeListComponent,
    AwesomeCreateComponent,
    AwesomeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
