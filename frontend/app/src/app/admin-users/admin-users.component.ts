import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private uService: UserService) { }

  ngOnInit(): void {
    this.editFlag = []
    this.uService.getAllUsers().subscribe((data: User[])=>{
      this.allUsers = data

      for (let u of this.allUsers) {
        this.editFlag.push(false)
      }
    })
  }

  allUsers: User[]
  

  delete(u: User){
    this.uService.deleteUser(u.username).subscribe(()=>{
      location.reload()
    })
  }

  editFlag: boolean[]
  name: string 
  surname: string 
  username: string 
  password: string
  email: string
  city: string 
  country: string
  type: number
  picture: string

  edit(u: User){

    if (this.editFlag[this.allUsers.indexOf(u)] == false) {
      this.editFlag[this.allUsers.indexOf(u)] = true

      this.name = u.name
      this.surname = u.surname
      this.username = u.username
      this.password = u.password
      this.email = u.email
      this.city = u.city
      this.country = u.country
      this.type = u.type

    } else {
      this.editFlag[this.allUsers.indexOf(u)] = false
      if (this.newPicture == null) this.newPicture = u.picture
      this.uService.updateUser(u.username, this.username, this.password, this.name, this.surname, this.email, this.city, this.country, this.type, this.newPicture).subscribe((data: User)=>{
      })
      setTimeout(function(){ location.reload() }, 100);
    }
  }

  newName: string 
  newSurname: string 
  newUsername: string 
  newPassword: string
  newEmail: string
  newCity: string 
  newCountry: string
  newPicture: string
  newFile: File

  fileSelected(ev: Event) {
    this.newFile = (ev.target as HTMLInputElement).files[0]
    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg']
    if (this.newFile && allowedTypes.includes(this.newFile.type)) {
      const reader = new FileReader()
      reader.onload = () => {
        this.newPicture = reader.result as string;
      }
      reader.readAsDataURL(this.newFile)
    } else {
      alert("Izabrani fajl nije ispravnog formata!");
      location.reload()
    }
  }

  addUser() {
    this.uService.addUserService(this.newName, this.newSurname, this.newUsername,
      this.newPassword, this.newEmail, this.newCity, this.newCountry, this.newPicture).subscribe(()=>{})

      setTimeout(()=>{
        this.ngOnInit()
      }, 300)
  }
}
