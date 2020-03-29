import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegistrationComponent = class RegistrationComponent {
    constructor(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.service.formModel.reset();
    }
    onSubmit() {
        this.service.register().subscribe((res) => {
            if (res.succeeded) {
                this.service.formModel.reset();
                this.toastr.success('Novo usuário cadastrado!', 'Sucesso.');
            }
            else {
                res.errors.forEach(element => {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            this.toastr.error('Usuário já cadastrado.', 'Falha.');
                            // Username is already taken
                            break;
                        default:
                            this.toastr.error(element.description, 'Falha.');
                            // Registration failed.
                            break;
                    }
                });
            }
        }, err => {
            console.log(err);
        });
    }
};
RegistrationComponent = __decorate([
    Component({
        selector: 'app-registration',
        templateUrl: './registration.component.html',
        styleUrls: []
    })
], RegistrationComponent);
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map