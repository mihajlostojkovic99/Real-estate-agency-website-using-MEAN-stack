import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LotService } from '../lot.service';
import { Lot } from '../models/lot';

@Component({
  selector: 'app-worker-lots',
  templateUrl: './worker-lots.component.html',
  styleUrls: ['./worker-lots.component.css']
})
export class WorkerLotsComponent implements OnInit {

  constructor(private lService: LotService, private ruter: Router) { }

  ngOnInit(): void {
    if (this.ruter.url == '/worker/newLots' || this.ruter.url == '/admin/newLots') {
      this.type = 1
      this.lService.getAllLots().subscribe((data: Lot[])=>{
        this.allLots = []
        for (let d of data){
          if (!d.approved) {
            this.allLots.push(d)
          }
        }
      })
    } else if (this.ruter.url == '/worker/allLots') {
      this.type = 2
      this.lService.getAllLots().subscribe((data: Lot[])=>{
        this.allLots = data
      })
    } else if (this.ruter.url == '/worker/promoteLots'){
      this.type = 3
      this.lService.getAllLots().subscribe((data: Lot[])=>{
        this.allLots = []
        for (let d of data) {
          if (!d.sold) this.allLots.push(d)
        }
      })
    }
    
  }

  allLots: Lot[]

  type: number

  getFloorApartment(l: Lot){
    if (l.type == 'stan') return l.floors.split('-')[0]
  }

  getFloorsBuilding(l: Lot){
    if (l.type == 'stan') return l.floors.split('-')[1]
  }

  prihvati(l: Lot){
    this.lService.updateLot(l.id, l.description, l.city, l.district, l.street, l.number, l.type, l.floors, l.sqMeters, l.rooms, l.equipped, l.rent, l.price, true, false, false, l.images, l.video).subscribe(()=>{
      this.ngOnInit()
    })
    
  }

  odbij(l: Lot){
    this.lService.deleteByID(l.id).subscribe(()=>{
      this.ngOnInit()
    })
  }

  promote(l: Lot){
    if (!l.promoted){
      this.lService.updateLot(l.id, l.description, l.city, l.district, l.street, l.number, l.type, l.floors, l.sqMeters, l.rooms, l.equipped, l.rent, 
        l.price, l.approved, true, false, l.images, l.video).subscribe(()=>{
          // window.location.reload()
          this.ngOnInit()
          
        })
        
    } else {
      this.lService.updateLot(l.id, l.description, l.city, l.district, l.street, l.number, l.type, l.floors, l.sqMeters, l.rooms, l.equipped, l.rent, 
        l.price, l.approved, false, false, l.images, l.video).subscribe(()=>{
          // window.location.reload()
          this.ngOnInit()
        })
    }
    
    
  }

  getImage(l: Lot){
    document.getElementById(stringify(l.id)).style.backgroundImage = `url(${l.images[0]})`
  }
}
