import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedIn'))

    if (this.user) {
      this.userType = this.user.type
      // document.getElementById('profileImage').style.backgroundImage = `url(${u.picture})`
    }
    else this.userType = null
  }

  user: User

  userType: number
  username: string
  password: string
  msg: string

  signIn(){
    this.userService.signInService(this.username, this.password).subscribe((user: User)=>{
      if (user) {
        localStorage.setItem('loggedIn', JSON.stringify(user))
        //rutiranje
        if (user.type==1) this.router.navigate(['user'])
        else if (user.type == 2) this.router.navigate(['worker'])
        else if (user.type == 3) this.router.navigate(['admin'])
        else this.router.navigate([''])
      } else {
        this.msg = 'Pogrešni podaci!'
      }
    })
  }
  
  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }

  home() {
    if (!this.userType) this.router.navigate([''])
    else if (this.userType == 1) this.router.navigate(['user'])
    else if (this.userType == 2) this.router.navigate(['worker'])
    else if (this.userType == 3) this.router.navigate(['admin'])
  }

  oldPass: string
  newPass: string
  newPassAgain: string
  msgNewPass: string

  changePass(){

    let regexp = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-=_+]).{8,24}$")
    if (!regexp.test(this.newPass)){
      this.msgNewPass = 'Šifra ne ispunjava minimalne zahteve.'
      return
    }

    let chars: string[] = this.newPass.split('')
    let cnt = 1
    let prevChar: string = ''
    for (let c of chars){
      if (c == prevChar) cnt++
      else cnt = 1
      prevChar = c
      if (cnt > 3) {
        this.msgNewPass = 'Šifra ne ispunjava minimalne zahteve.'
        return
      }
    }
    let user: User = JSON.parse(localStorage.getItem('loggedIn'))
    if (user.password == this.oldPass && (this.newPass == this.newPassAgain)) {
      this.userService.updateUser(user.username, user.username, this.newPass, user.name, user.surname, user.email, user.city, user.country, user.type, user.picture).subscribe(()=>{
        
      })
      this.logout()
    } else this.msgNewPass = 'Neispravna šifra.'
  }

  changeProfile() {
    this.router.navigate(['user/changeProfile'])
  }

  zahtevi(){
    this.router.navigate(['user/requests'])
  }

  addLot(){
    this.router.navigate(['user/addLot'])
  }

  myLots(){
    this.router.navigate(['user/myLots'])
  }

  rents(){
    this.router.navigate(['user/rents'])
  }

  rentsApartment(){
    this.router.navigate(['user/rentsApartment'])
  }

  rentsHouse(){
    this.router.navigate(['user/rentsHouse'])
  }

  sales(){
    this.router.navigate(['user/sales'])
  }

  salesApartment(){
    this.router.navigate(['user/salesApartment'])
  }

  salesHouse(){
    this.router.navigate(['user/salesHouse'])
  }
}
