import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import { count } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  signInService(username, password) {
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/users/login`, data)
  }

  addUserService(name, surname, username, password, email, city, country, picture) {
    const data = {
      name: name,
      surname: surname,
      username: username,
      password: password,
      email: email,
      city: city,
      country: country,
      type: 1,
      picture: picture
    }

    return this.http.post(`${this.uri}/users/addUser`, data)
  }

  registerService(name, surname, username, password, email, city, country, picture) {
    const data = {
      name: name,
      surname: surname,
      username: username,
      password: password,
      email: email,
      city: city,
      country: country,
      type: 1,
      picture: picture
    }

    return this.http.post(`${this.uri}/users/register`, data)
  }

  getAllRegistrations(){
    return this.http.get(`${this.uri}/users/getAllRegistrations`)
  }

  getAllUsers(){
    return this.http.get(`${this.uri}/users/getAllUsers`)
  }

  getRegistration(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/users/getRegistration`, data)

  }

  deleteRegistration(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/users/deleteRegistration`, data)

  }

  deleteUser(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/users/deleteUser`, data)

  }

  updateUser(oldUsername, newUsername, password, name, surname, email, city, country, type, picture) {
    const data = {
      oldUsername: oldUsername,
      newUsername: newUsername,
      password: password,
      name: name,
      surname: surname,
      email: email,
      city: city,
      country: country,
      type: type,
      picture: picture
    }

    return this.http.post(`${this.uri}/users/updateUser`, data)

  }

  getAdmin() {
    return this.http.get(`${this.uri}/users/getAdmin`)
  }

  updatePercents(username, sell, rent) {
    const data = {
      username: username,
      sell: sell,
      rent: rent
    }

    return this.http.post(`${this.uri}/users/updatePercents`, data)

  }
}
