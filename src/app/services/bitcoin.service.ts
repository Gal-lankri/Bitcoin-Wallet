import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  getRate(coins: number) {
    return this.http
      .get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(() => err);
        })
      );
  }

  getMarketPrice() {
    return this.http
      .get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(() => err);
        })
      );
  }

  getConfirmedTransactions() {
    return this.http
      .get(`https://api.blockchain.info/charts/n-transactions?timespan=1months&format=json&cors=true`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(() => err);
        })
      );
  }
}
