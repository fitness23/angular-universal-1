import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';

import { HttpService } from "./services/http.service";
import { HttpClientModule } from '@angular/common/http';

import {TransferHttpCacheModule} from '@nguniversal/common';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-app' }),
    AppRoutingModule,
    HttpClientModule,
    TransferHttpCacheModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
