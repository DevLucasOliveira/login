import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    ngOnInit() {
        this.service.getUserProfile().subscribe(res => {
            this.userDetails = res;
        }, err => {
            console.log(err);
        });
    }
    onLogout() {
        localStorage.removeItem('token');
        this.router.navigate(['/user/login']);
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: []
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map