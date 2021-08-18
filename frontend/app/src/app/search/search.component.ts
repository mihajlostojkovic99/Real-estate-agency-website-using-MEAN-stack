import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LotService } from '../lot.service';
import { Lot } from '../models/lot';
import { User } from '../models/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private lService: LotService, private ruter: Router) { }

  ngOnInit(): void {
    let user: User = JSON.parse(localStorage.getItem('loggedIn'))
    if (user) this.flagLogged = true
    else this.flagLogged = false

    this.lService.getAllLots().subscribe((data: Lot[])=>{
      this.lots = []

      if (this.ruter.url == '/user/rents') {
        for (let d of data) {
          if (d.approved && !d.sold && d.rent) this.lots.push(d)
        }
      } else if (this.ruter.url == '/user/rentsApartment') {
        for (let d of data) {
          if (d.approved && !d.sold && d.rent && d.type == 'stan') this.lots.push(d)
        }
      } else if (this.ruter.url == '/user/rentsHouse') {
        for (let d of data) {
          if (d.approved && !d.sold && d.rent && d.type == 'kuca') this.lots.push(d)
        }
      } else if (this.ruter.url == '/user/sales') {
        for (let d of data) {
          if (d.approved && !d.sold && !d.rent) this.lots.push(d)
        }
      } else if (this.ruter.url == '/user/salesApartment') {
        for (let d of data) {
          if (d.approved && !d.sold && !d.rent && d.type == 'stan') this.lots.push(d)
        }
      } else if (this.ruter.url == '/user/salesHouse') {
        for (let d of data) {
          if (d.approved && !d.sold && !d.rent && d.type == 'kuca') this.lots.push(d)
        }
      } else {
        for (let d of data) {
          if (d.approved && !d.sold) this.lots.push(d)
        }
      }

      
      // this.lots = data
      for (let l of this.lots) {
        let flag = false
        for (let g of this.cities) {
          if (g == l.city) {
            flag = true
            break
          }
        }
        if (flag == false) this.cities.push(l.city)
      }
    })
  }

  flagLogged: boolean = false

  lots: Lot[]
  cities: string[] = []

  city: string = ''
  minPrice: number
  maxPrice: number

  search(){
    this.lService.searchCity(this.city).subscribe((data: Lot[])=>{
      this.lots = []
      
      if (this.minPrice && this.maxPrice) {
        for (let d of data) {
          if (d.approved && !d.sold && d.price >= this.minPrice && d.price <= this.maxPrice){
            this.lots.push(d)
          }
        }
      } else if (this.minPrice) {
        for (let d of data) {
          if (d.approved && !d.sold && d.price >= this.minPrice){
            this.lots.push(d)
          }
        }
      } else if (this.maxPrice) {
        for (let d of data) {
          if (d.approved && !d.sold && d.price <= this.maxPrice){
            this.lots.push(d)
          }
        }
      } else {
        for (let d of data) {
          if (d.approved && !d.sold) this.lots.push(d)  
        }
      }
    })
  }

  goToLot(l: Lot){
    l.video = null
    localStorage.setItem('currentLot', JSON.stringify(l))
    this.ruter.navigate(['lot'])
  }

  getImage(l: Lot){
    document.getElementById(stringify(l.id)).style.backgroundImage = `url(${l.images[0]})`
  }
}
