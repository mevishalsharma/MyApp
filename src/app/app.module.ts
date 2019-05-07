import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

//import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserserviceService } from './service/userservice.service';
import { HttpMockRequestInterceptor } from './service/HttpInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
   
    NgxPaginationModule
  ],
  providers: [
     {provide : HTTP_INTERCEPTORS, useClass: HttpMockRequestInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
