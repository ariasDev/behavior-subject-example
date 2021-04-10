import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userManager$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }

  setUser(user: User): void {
    this.userManager$.next(user)
  }

  getUser(): Observable<boolean> {
    return this.userManager$.asObservable();
  }
}
