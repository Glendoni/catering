import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AlertService, AuthenticationService } from '../../../_services/index';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;
     model: any = {};
    loading = false;
    returnUrl: string;

    constructor(fb: FormBuilder, private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {

        this.loginForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': [null, Validators.required]
        });
          // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }

    submitForm($ev, form: FormGroup) {
        $ev.preventDefault();
        const value = form.value;
        for (const c in form.controls) {
            if (true) {
            form.controls[c].markAsTouched();
            }
        }
        if (form.valid) {
            console.log('Valid!');
            
              this.authenticationService.login(value.email, value.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
            
            
        }
        console.log(value);
        
    
    
    
    
    
    }
       login() {
        // this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    ngOnInit() {
    }

}
