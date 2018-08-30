import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user/user.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
    }

    submit() {
        if (this.userService.checkPassword('mferenca', 'pass')) {
            this.router.navigateByUrl('dashboard');
        } else {
            console.error('Wrong username and/or password');
        }
    }

}
