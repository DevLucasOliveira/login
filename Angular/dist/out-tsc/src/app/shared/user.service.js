import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
let UserService = class UserService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.BaseURI = 'http://localhost:55755/api';
        this.formModel = this.fb.group({
            UserName: ['', Validators.required],
            Email: ['', Validators.email],
            FullName: [''],
            Passwords: this.fb.group({
                Password: ['', [Validators.required, Validators.minLength(4)]],
                ConfirmPassword: ['', Validators.required]
            }, { validators: this.comparePasswords })
        });
    }
    comparePasswords(fb) {
        const confirmPswrdCtrl = fb.get('ConfirmPassword');
        // passworMismatch
        // confirmPswrdCtrl.errors={passwordMismatch: true}
        if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
            if (fb.get('Password').value !== confirmPswrdCtrl.value) {
                confirmPswrdCtrl.setErrors({ passwordMismatch: true });
            }
            else {
                confirmPswrdCtrl.setErrors(null);
            }
        }
    }
    register() {
        const body = {
            UserName: this.formModel.value.UserName,
            Email: this.formModel.value.Email,
            FullName: this.formModel.value.FullName,
            Password: this.formModel.value.Passwords.Password
        };
        return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
    }
    login(formData) {
        return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
    }
    getUserProfile() {
        return this.http.get(this.BaseURI + '/UserProfile');
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map