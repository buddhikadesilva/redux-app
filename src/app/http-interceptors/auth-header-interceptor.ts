import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {

        //
        console.log('Auth Intercept Provider');
        console.log(request.url);
        const authToken = "My Auth Token";
        const authReq = request.clone({
            setHeaders: { Authorization: authToken }
        });

        return next.handle(authReq);
    }

}