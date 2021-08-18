import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LotService } from '../lot.service';
import { Lot } from '../models/lot';
import { User } from '../models/user';

@Component({
  selector: 'app-user-my-lots',
  templateUrl: './user-my-lots.component.html',
  styleUrls: ['./user-my-lots.component.css']
})
export class UserMyLotsComponent implements OnInit {

  constructor(private lService: LotService, private ruter: Router) { }

  ngOnInit(): void {
    let user: User = JSON.parse(localStorage.getItem('loggedIn'))

    this.lService.getAllLots().subscribe((data: Lot[])=>{
      this.lots = []
      for (let d of data) {
        if ((d.owner == user.username) || (user.type == 2 && d.owner == 'agencija' && !d.sold)) this.lots.push(d)
      }
    })
  }

  lots: Lot[]

  getImage(l: Lot){
    document.getElementById(stringify(l.id)).style.backgroundImage = `url(${l.images[0]})`
  }
}
