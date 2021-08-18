import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LotService } from '../lot.service';
import { Lot } from '../models/lot';

@Component({
  selector: 'app-promoted-lots',
  templateUrl: './promoted-lots.component.html',
  styleUrls: ['./promoted-lots.component.css']
})
export class PromotedLotsComponent implements OnInit {

  constructor(private lService: LotService, private ruter: Router) { }

  ngOnInit(): void {
    this.images = []
    this.lots = []
      this.lService.getAllLots().subscribe((data: Lot[])=>{
        for (let d of data){
          if (d.promoted && !d.sold) {
            this.lots.push(d)
            let rng = Math.floor(Math.random() * d.images.length);
            this.images.push(d.images[rng])
          }
        }
        document.getElementById('slika').style.backgroundImage = `url(${this.images[0]})`
      })
    
  }

  lots: Lot[]
  images: string[] = []
  index: number = 0

  left(){
    this.index = this.index-1
    if (this.index == -1) this.index = this.images.length - 1
    document.getElementById('slika').style.backgroundImage = `url(${this.images[this.index]})`
  }

  right(){
    this.index = this.index + 1
    if (this.index == this.images.length) this.index = 0
    document.getElementById('slika').style.backgroundImage = `url(${this.images[this.index]})`
  }

  goToLot(){
    if (JSON.parse(localStorage.getItem('loggedIn'))){
      this.lots[this.index].video = null
      this.lots[this.index].images = null
      localStorage.setItem('currentLot', JSON.stringify(this.lots[this.index]))
      this.ruter.navigate(['lot'])
    }
  }

  visible() {
    if (JSON.parse(localStorage.getItem('loggedIn'))) return true
    else return false
  }
}
