import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}
  title = 'Bitcoin Wallet';
  ngOnInit() {
    if (!localStorage.getItem('user')) this.router.navigateByUrl('signup');
  }
}
