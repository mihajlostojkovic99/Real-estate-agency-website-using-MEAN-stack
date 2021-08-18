import { Component, OnInit } from '@angular/core';
import { LotService } from '../lot.service';
import { Lot } from '../models/lot';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private lService: LotService, private uService: UserService) { }

  ngOnInit(): void {
    // this.uService.getAllUsers().subscribe((data: User[])=>{
    //   let user: User
    //   for (let d of data) {
    //     if (d.username == 'test123') {
    //       user = d
    //       break
    //     }
    //   }
    //   document.getElementById('slika').style.backgroundImage = `url(${user.picture})`
    // })
    this.lService.getAllLots().subscribe((data: Lot[])=>{
      this.lots = data
    })
  }

  lots: Lot[]
}
