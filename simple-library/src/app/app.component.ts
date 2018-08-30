import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private userService: UserService, private router: Router) {

    }

    ngOnInit() {
        if (this.userService.getUser()) {
            this.router.navigateByUrl('/dashboard');
        } else {
            this.router.navigateByUrl('/login');
        }
    }
}
