import { Injectable } from '@angular/core';
import { delay, of, throwError } from 'rxjs';

import { User } from '../interfaces/user';
import { HttpResponse } from '@angular/common/http';

let users: any[] = [];

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService {

  constructor() { }

  register(user: User) {

    if (users.find(x => x.username === user.username)) {
      return this.error('Username "' + user.username + '" is already taken')
    }

    const id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
    user.id = id.toString()
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    return this.ok();
  }

  authenticate(username: string, password: string) {
    const user = users.find(x => x.username === username && x.password === password);
    if (!user) return this.error('Username or password is incorrect');
    return this.ok({
        ...this.basicDetails(user),
        token: 'jtw token'
    })
  }

  ok(body?: any) {
    return of(new HttpResponse({ status: 200, body }))
        .pipe(delay(500));
  }

  error(message: string) {
    return throwError(() => ({ error: { message } }))
        .pipe(delay(1000));
  }

  basicDetails(user: User) {
    const { id, username, firstName, lastName } = user;
    return { id, username, firstName, lastName };
  }
}
