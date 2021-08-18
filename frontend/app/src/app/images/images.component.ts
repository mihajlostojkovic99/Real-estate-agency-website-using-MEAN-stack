import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LotService } from '../lot.service';
import { Lot } from '../models/lot';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private lService: LotService, private ruter: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.images = []
    if (this.ruter.url == '/lot'){
      
      let currentLot = JSON.parse(localStorage.getItem('currentLot'))
      this.lService.findByID(currentLot.id).subscribe((lot: Lot)=>{
        currentLot.video = lot.video
        currentLot.images = lot.images
        this.images = currentLot.images
        document.getElementById('slika').style.backgroundImage = `url(${this.images[0]})`
      })
      

    } if (this.activatedRoute.snapshot.paramMap.get('id')){
      
      this.lService.getAllLots().subscribe((data: Lot[])=>{
        for (let d of data){
          if (d.id == parseInt(this.activatedRoute.snapshot.paramMap.get('id'))) {
            this.images = d.images
          }
        }
        document.getElementById('slika').style.backgroundImage = `url(${this.images[0]})`
      })

    } 
  }

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

}
