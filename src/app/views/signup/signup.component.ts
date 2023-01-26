import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private userService: UserService, private router: Router) {}
  userName!: string;

  onSignup() {
    this.userService.signup(this.userName);
    this.router.navigate(['/']);
  }
}
