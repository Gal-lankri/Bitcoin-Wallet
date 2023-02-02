import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSignup(form:NgForm) {
    console.log(form.value);
    
    this.userService.signup(form.value.name);
    this.router.navigate(['/']);
  }
  setFocus() {
    this.name.nativeElement.focus();
  }
}
