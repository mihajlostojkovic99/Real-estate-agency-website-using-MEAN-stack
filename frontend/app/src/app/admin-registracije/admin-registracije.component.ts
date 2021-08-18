import { Component, OnInit } from '@angular/core';
import { Registration } from '../models/registration';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-registracije',
  templateUrl: './admin-registracije.component.html',
  styleUrls: ['./admin-registracije.component.css']
})
export class AdminRegistracijeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllRegistrations().subscribe((data:Registration[])=>{
      this.registrations = data
    })
  }

  registrations: Registration[]

  prihvati(username: string){

    this.userService.deleteRegistration(username).subscribe((data: Registration)=>{
      
      this.userService.addUserService(data.name, data.surname, data.username, data.password, data.email, data.city, data.country, data.picture).subscribe(()=>{})
      this.ngOnInit()
    })
  }

  odbij(username: string){
    this.userService.deleteRegistration(username).subscribe(()=>{
      this.ngOnInit()
    })
  }
}
