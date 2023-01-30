import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements AfterViewInit {
  constructor(private userService: UserService, private router: Router) {}
  ngAfterViewInit(): void {
    this.name.nativeElement.focus()
  }
  userName!: string;
  @ViewChild('name') name!: ElementRef<HTMLInputElement>;

  onSignup() {
    this.userService.signup(this.userName);
    this.router.navigate(['/']);
  }
  setFocus() {
    this.name.nativeElement.focus();
  }
}
