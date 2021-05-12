import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Interceptor working ....");
    //For Tocken Pass
    // I get Cors policy error after pass tocken beacause header is not added from the backend side.
    // request = request.clone ( {
    //   setHeaders : {
    //     Authorization : 'Bearer abab_OUR_TOCKEN_HERE_bsdddhddhdh'
    //   }
    // })
    return next.handle(request);
    
  }
}
