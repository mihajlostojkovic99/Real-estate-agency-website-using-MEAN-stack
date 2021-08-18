import { Component, OnInit } from '@angular/core';
import { BuyingService } from '../buying.service';
import { LotService } from '../lot.service';
import { BuyRequest } from '../models/buyRequest';
import { Lot } from '../models/lot';
import { Rent } from '../models/rent';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  constructor(private rService: RentService, private lService: LotService, private bService: BuyingService) { }

  ngOnInit(): void {

    this.lService.getAllLots().subscribe((data: Lot[])=>{
      this.lots = data
    })

    this.rService.getAllRents().subscribe((data: Rent[])=>{
      this.approvedRents = []

      for (let d of data) {
        if (d.approved) {
          this.approvedRents.push(d)
          this.totalRents+=d.profit
        }
      }
    })

    this.bService.getAllBuyRequests().subscribe((data: BuyRequest[])=>{
      this.approvedBuyRequests = []

      for (let d of data) {
        if (d.approved) this.approvedBuyRequests.push(d)
        this.totalBuyRequests+=d.profit
      }
    })
  }

  approvedRents: Rent[]
  approvedBuyRequests: BuyRequest[]
  totalRents: number = 0
  totalBuyRequests: number = 0
  lots: Lot[]


  type(lotID){
    for (let l of this.lots) {
      if (l.id == lotID) {
        return l.type
      }
    }
  }

  address(lotID){
    for (let l of this.lots) {
      if (l.id == lotID) {
        return l.city + '(' + l.district + '), ' + l.street + ' br.' + l.number
      }
    }
  }

  owner(lotID){
    for (let l of this.lots) {
      if (l.id == lotID) {
        return l.owner
      }
    }
  }

  price(lotID){
    for (let l of this.lots) {
      if (l.id == lotID) {
        return l.price
      }
    }
  }
}
