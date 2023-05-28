import { makeObservable, observable, action } from 'mobx';

class UserModel {
  id = '';
  email = '';
  hasInitialized = false;
  token = '';

  get isLoggedIn() {
    return this.id !== '';
  }

  constructor() {
    makeObservable(this, {
      id: observable,
      email: observable,
      hasInitialized: observable,
      token: observable,
      login: action,
      logout: action,
    });
  }

  login(user: { id: string; email: string; token: string }) {
    this.id = user.id;
    this.email = user.email;
    this.hasInitialized = true;
    this.token = user.token;
  }

  logout() {
    this.id = '';
    this.email = '';
    this.hasInitialized = true;
    this.token = '';
  }
}

export default new UserModel();
