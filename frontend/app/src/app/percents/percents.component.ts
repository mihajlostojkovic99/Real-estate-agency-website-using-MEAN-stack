import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-percents',
  templateUrl: './percents.component.html',
  styleUrls: ['./percents.component.css']
})
export class PercentsComponent implements OnInit {

  constructor(private uService: UserService) { }

  ngOnInit(): void {
    this.uService.getAllUsers().subscribe((data: User[])=>{
      for (let d of data) {
        if (d.type == 3) {
          this.admin = d
          this.sellPercent = (this.admin.sell * 100).toFixed(2)
          this.rentPercent = (this.admin.rent * 100).toFixed(2)
        }
      }
    })
  }
  admin: User
  sellPercent: string
  rentPercent: string

  change(){
    this.uService.updatePercents(this.admin.username, parseFloat(this.sellPercent)/100, parseFloat(this.rentPercent)/100).subscribe(()=>{
      this.ngOnInit()
    })
  }
}
