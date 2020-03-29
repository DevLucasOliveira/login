import { __decorate } from "tslib";
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: '/user/login', pathMatch: 'full' },
    { path: 'user', component: UserComponent,
        children: [
            { path: 'registration', component: RegistrationComponent },
            { path: 'login', component: LoginComponent }
        ] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map