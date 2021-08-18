import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url == '/user/changeProfile') {
      this.updateUser = true

      this.u = JSON.parse(localStorage.getItem('loggedIn'))
      this.name = this.u.name
      this.surname = this.u.surname
      this.username = this.u.username
      this.email = this.u.email
      this.city = this.u.city
      this.country = this.u.country
      this.picture = this.u.picture
      
    } else this.updateUser = false
  }

  u: User
  updateUser: boolean
  name: string
  surname: string
  username: string
  password: string
  passwordAgain: string
  email: string
  city: string
  country: string
  picture: string
  newFile: File

  message: string

  fileSelected(ev: Event) {
    this.newFile = (ev.target as HTMLInputElement).files[0]
    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg']
    if (this.newFile && allowedTypes.includes(this.newFile.type)) {
      const reader = new FileReader()
      reader.onload = () => {
        this.picture = reader.result as string
      }
      reader.readAsDataURL(this.newFile)
    } else {
      alert("Izabrani fajl nije ispravnog formata!")
      location.reload()
    }
  }

  register() {

  

    

    let regexp = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-=_+]).{8,24}$")
    if (!regexp.test(this.password)){
      this.message = 'Šifra ne ispunjava minimalne zahteve.'
      return
    }

    let chars: string[] = this.password.split('')
    let cnt = 1
    let prevChar: string = ''
    for (let c of chars){
      if (c == prevChar) cnt++
      else cnt = 1
      prevChar = c
      if (cnt > 3) {
        this.message = 'Šifra ne ispunjava minimalne zahteve.'
        return
      }
    }

    if (this.password != this.passwordAgain) {
      this.message = 'Ponovljena šifra nije ispravna!'
      return
    }
    this.userService.registerService(this.name, this.surname, this.username,
      this.password, this.email, this.city, this.country, this.picture).subscribe(
      response=>{
        if (response['message']=='user added') {
          this.router.navigate([''])
        } else {
          this.router.navigate([''])
        }
      }
    )
    this.message = ''
  }

  update(){
    this.userService.updateUser(this.u.username, this.u.username, this.u.password, this.name, this.surname, this.email,
      this.city, this.country, this.u.type, this.picture).subscribe((updatedUser: User)=>{})
      
      setTimeout(()=>{
        this.userService.signInService(this.username, this.u.password).subscribe((data: User)=>{
            localStorage.setItem('loggedIn', JSON.stringify(data))
            this.router.navigate(['user'])   
        })
      }, 200)
  }

  msg: string = ''

  formNotValid(){
    this.msg = 'POPUNITI SVA POLJA'
  }
}
