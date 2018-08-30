import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() { }

    getUser(): User {
        return <User>JSON.parse(localStorage.getItem('user'));
    }

    setUser(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    checkPassword(username: string, password: string) {
        return true;
    }
}
