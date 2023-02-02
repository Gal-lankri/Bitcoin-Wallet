import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Move } from 'src/app/models/move.model';
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
    private userService: UserService,
    private BitcoinService: BitcoinService
  ) {}
  user!: User;
  users: any;
  bitcoinRate!: string | object;
  userMoves!: object[];
  async ngOnInit(): Promise<void> {
    this,this.userService.getUser()
    this.userService.users$.subscribe((user) => (this.user = user));
    this.getMoves();
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
    return this.user.moves.slice(-3);
  }
}
