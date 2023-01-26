import { Injectable, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { Move } from '../models/move.model';
import { Contact } from '../models/contact.model';

const user = new User('Moshe', 100, []);

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor() {}
  private _STORAGE_KEY = 'user';
  private _usersDb: User[] = [];
  private _users$ = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable();

  public getUser(): Observable<any> {
    //mock the server work
    const user: any = localStorage.getItem(this._STORAGE_KEY);
    this._usersDb.push(JSON.parse(user));
    // //return an observable
    return user ? of(JSON.parse(user)) : throwError(() => `User not found!`);
    this._users$.next(this._usersDb);
  }

  private _updateUser(newUser: User) {
    localStorage.setItem(this._STORAGE_KEY, JSON.stringify(newUser));
    this.getUser();
  }

  public signup(userName: string) {
    const user = new User(userName);
    localStorage.setItem(this._STORAGE_KEY, JSON.stringify(user));
    this.getUser();
  }

  public addMove(contact: Contact, amount: number) {
    const move = new Move(contact._id, contact.name, Date.now(), amount);
    let user: any = localStorage.getItem(this._STORAGE_KEY);
    user = JSON.parse(user);
    if (user.coins < amount) return alert('You don\'t have enough money')
    user.moves.push(move);
    user.coins -= amount;
    this._updateUser(user);
  }
}
