import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private UserService: UserService,
    private BitcoinService: BitcoinService
  ) {}
  user!: User;
  users: any;
  bitcoinRate!: string | object;

  ngOnInit(): void {
    this.UserService.getUser().subscribe((user) => {
      this.user = user;
    });
    console.log(this.user);

    this.BitcoinService.getRate(100).subscribe({
      next: (response: string | object): void => {
        this.bitcoinRate = response;
      },
      error: (err: HttpErrorResponse): void => {
        console.log(err);
      },
    });
  }
  getMoves() {
    const moves = this.user.moves.slice(-3)
    return moves;
  }
}
