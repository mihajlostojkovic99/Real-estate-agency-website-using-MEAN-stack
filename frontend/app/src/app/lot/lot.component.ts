import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Timestamp } from 'rxjs';
import { BuyingService } from '../buying.service';
import { LotService } from '../lot.service';
import { BuyRequest } from '../models/buyRequest';
import { Lot } from '../models/lot';
import { Rent } from '../models/rent';
import { User } from '../models/user';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.css']
})
export class LotComponent implements OnInit {

  constructor(private ruter: Router, private rService: RentService, private bService: BuyingService, private activatedRoute: ActivatedRoute, private lService: LotService) { }

  ngOnInit(): void {

    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      
      this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'))
      this.lService.findByID(this.id).subscribe((lot: Lot)=>{
        this.video = lot.video
      })
      this.lService.findByID(this.id).subscribe((data: Lot)=>{
        this.lot = data
        if (this.lot.type == 'stan'){
          this.spratStan = this.lot.floors.split('-')[0]
          this.spratovaZgrada = this.lot.floors.split('-')[1]
        } else this.spratStan = this.lot.floors
        
      })
    } else {
      this.lot = JSON.parse(localStorage.getItem('currentLot'))
      this.lService.findByID(this.lot.id).subscribe((lot: Lot)=>{
        this.video = lot.video
      })
    if (this.lot.type == 'stan') {
      this.spratStan = this.lot.floors.split('-')[0]
      this.spratovaZgrada = this.lot.floors.split('-')[1]
    }

    this.rService.getRentsForID(this.lot.id).subscribe((data: Rent[])=>{
      this.rents = []
      for(let d of data){
        d.startDateAsDate = new Date(d.startDate)
        d.endDateAsDate = new Date(d.endDate)
        if (d.approved) {
          this.rents.push(d)
        }
      }
    })
    }
  }

  video: string

  id: number

  rents: Rent[]
  lot: Lot
  spratStan: string
  spratovaZgrada: string

  startDate: string
  endDate: string
  totalPrice: number
  msg: string

  send(){
    let startDateAsDate = new Date(this.startDate)
    let endDateAsDate = new Date(this.endDate)
    for (let r of this.rents) {
      if ((startDateAsDate.getTime() > r.startDateAsDate.getTime() && startDateAsDate.getTime() < r.endDateAsDate.getTime()) || 
      (endDateAsDate.getTime() > r.startDateAsDate.getTime() && endDateAsDate.getTime() < r.endDateAsDate.getTime()) || 
      (startDateAsDate.getTime() < r.startDateAsDate.getTime() && endDateAsDate.getTime() > r.endDateAsDate.getTime())) {
        
        this.msg = 'Izabrani datumi su zauzeti.'
        return
      }
    }
    let u: User = JSON.parse(localStorage.getItem('loggedIn'))
    this.rService.getAllRents().subscribe((data: Rent[])=>{
      let id = 1
      if (data[0] != undefined) id = data[data.length-1].id+1
      this.rService.addRent(id, this.lot.id, this.startDate, this.endDate, this.totalPrice, u.username).subscribe(()=>{
        this.msg = 'Zahtev je poslat vlasniku'
      })
    })
    

    
  }


  price: number = 0
  loan: boolean = false
  ucesce: number
  buyMsg: string

  buy(){
    if (this.loan) this.ucesce = this.price*0.2
    let u: User = JSON.parse(localStorage.getItem('loggedIn'))
    this.bService.getAllBuyRequests().subscribe((data: BuyRequest[])=>{
      let id = 1
      if (data[0] != undefined) id = data[data.length-1].id+1
      this.bService.addBuyRequest(id, this.lot.id, this.price, u.username).subscribe(()=>{
        if (this.loan) {
          this.ucesce = this.price*0.2
          this.buyMsg = 'Predlog je poslat vlasniku. Ucesce(20%) kredita iznosi: ' + this.ucesce + 'EUR'
        } else this.buyMsg = 'Predlog je poslat vlasniku.'
      })
    })
    
  }






  filesImages:File[] = []


  fileSelected(ev: Event) {
    const input: HTMLInputElement = ev.target as HTMLInputElement;
    if (input) {
      for (let i = 0; i < input.files.length; i++) this.filesImages.push(input.files[i])
      const allowedImageTypes = ['image/png', 'image/jpg', 'image/jpeg']
     
      this.filesImages.forEach(file => {
        if (allowedImageTypes.includes(file.type)) {
          const reader = new FileReader()
          reader.onload = () => {
            this.lot.images.push(reader.result as string)
          }
          reader.readAsDataURL(file)
          return
        } else {
          alert("Izabrani fajlovi nisu ispravnog formata!")
          location.reload()
        }
      })
    }
  }

  fileVideo: File

  fileSelectedVideo(ev: Event) {
    this.fileVideo = (ev.target as HTMLInputElement).files[0]
    const allowedTypes = ['video/mp4', 'video/mkv', 'video/avi']
    if (this.fileVideo && allowedTypes.includes(this.fileVideo.type)) {
      const reader = new FileReader()
      reader.onload = () => {
        this.lot.video = reader.result as string
      }
      reader.readAsDataURL(this.fileVideo)
    } else {
      alert("Izabrani fajl nije ispravnog formata!")
      location.reload()
    }
  }



  update(){
    if (this.lot.type == 'stan') {
      this.lot.floors = this.spratStan + '-' + this.spratovaZgrada
    } else this.lot.floors = this.spratStan

    this.lService.updateLot(this.lot.id, this.lot.description, this.lot.city, this.lot.district, this.lot.street, this.lot.number, this.lot.type, this.lot.floors,
      this.lot.sqMeters, this.lot.rooms, this.lot.equipped, this.lot.rent, this.lot.price, this.lot.approved, this.lot.promoted, this.lot.sold, this.lot.images, this.lot.video).subscribe(()=>{})
    this.msg = 'Podaci su azurirani.'
  }

  back(){
    this.ruter.navigate(['user/myLots'])
  }

  getVideo(){

    this.lService.findByID(1).subscribe((lot: Lot)=>{
      return lot.video
    })
  }
  
}
