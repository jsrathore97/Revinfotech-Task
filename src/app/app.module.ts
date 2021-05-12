import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule  , HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import  { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { TableExampleComponent } from './table-example/table-example.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { UppercaseDirective } from './uppercase.directive';
import { OnlynumberDirective } from './onlynumber.directive';
import { UpperCaseExampleComponent } from './upper-case-example/upper-case-example.component';
import { CommonServiceService } from '../app/common-service.service';
import { HttpInterceptorInterceptor } from  '../app/http-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TableExampleComponent,
    UppercaseDirective,
    OnlynumberDirective,
    UpperCaseExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent
     },
    
     {
      path: 'header',
      component: HeaderComponent
   },
   {
    path: 'tableExample',
    component: TableExampleComponent
 },   
 {
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'upperCase-example',
  component: UpperCaseExampleComponent
},
{
  path: '**',
  component: DashboardComponent
},
   ])
  ],
  providers: [CommonServiceService , 
              {
                provide :HTTP_INTERCEPTORS , 
                useClass : HttpInterceptorInterceptor,
                multi : true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
