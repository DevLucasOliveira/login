import { __decorate } from "tslib";
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
let AuthInterceptor = class AuthInterceptor {
    constructor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    intercept(req, next) {
        if (localStorage.getItem('token') != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(tap(succ => { }, err => {
                if (err.status === 401) {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('/user/login');
                    this.toastr.error('ERROR', 'Falha de autenticação.');
                }
            }));
        }
        else {
            return next.handle(req.clone());
        }
    }
};
AuthInterceptor = __decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map