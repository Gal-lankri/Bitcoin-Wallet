import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  checkLoggedInUser() {
    const user = localStorage.getItem('user');
    return user ? of(true) : of(false);
  }
}
