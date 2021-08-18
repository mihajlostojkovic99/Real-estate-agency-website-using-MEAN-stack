import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LotService } from '../lot.service';
import { Lot } from '../models/lot';
import { User } from '../models/user';

@Component({
  selector: 'app-user-add-lot',
  templateUrl: './user-add-lot.component.html',
  styleUrls: ['./user-add-lot.component.css']
})
export class UserAddLotComponent implements OnInit {

  constructor(private lService: LotService, private ruter: Router) { }

  ngOnInit(): void {
  }

  description: string
  city: string
  district: string
  street: string
  number: string
  type: string
  floors: string
  floor: string
  totalFloors: string
  sqMeters: number
  rooms: string
  equipped: boolean
  rent: boolean
  price: number
  owner: string
  images: string[] = []
  video: string
  filesImages:File[] = []
  fileVideo: File


  fileSelected(ev: Event) {
    const input: HTMLInputElement = ev.target as HTMLInputElement
    if (input) {
      for (let i = 0; i < input.files.length; i++)
        this.filesImages.push(input.files[i])
      const allowedImageTypes = ['image/png', 'image/jpg', 'image/jpeg']
     
      this.filesImages.forEach(file => {
        if (allowedImageTypes.includes(file.type)) {
          const reader = new FileReader()
          reader.onload = () => {
            this.images.push(reader.result as string)
          }
          reader.readAsDataURL(file)
          return
        } else {
          alert("Izabrani fajl nije ispravnog formata!")
          location.reload()
        }
      })
    }
  }

  

  fileSelectedVideo(ev: Event) {
    this.fileVideo = (ev.target as HTMLInputElement).files[0]
    const allowedTypes = ['video/mp4', 'video/mkv', 'video/avi']
    if (this.fileVideo && allowedTypes.includes(this.fileVideo.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.video = reader.result as string
      }
      reader.readAsDataURL(this.fileVideo)
    } else {
      alert("Izabrani fajl nije ispravnog formata!")
      location.reload()
    }
  }


  msg: string

  add(){

    let mediaNumber = 0
    if (this.video) mediaNumber = this.images.length + 1
    else mediaNumber = this.images.length
    if (mediaNumber<3){
      this.msg = 'Nekretnina mora imati barem 3 slike+video!'
      return
    }

    if (this.type == 'stan') {
      this.floors = this.floor + '-' + this.totalFloors
    } else this.floors = this.floor
    
    let user: User = JSON.parse(localStorage.getItem('loggedIn'))

    if (user.type == 2 || user.type == 3) {
      this.lService.getAllLots().subscribe((lots: Lot[])=>{
        let id = lots[lots.length-1].id + 1
        this.lService.addLot(id, this.description, this.city, this.district, this.street, this.number, this.type, this.floors, this.sqMeters, this.rooms, this.equipped,
          this.rent, this.price, 'agencija', true, this.images, this.video).subscribe(()=>{
            if (user.type == 2) this.ruter.navigate(["worker"])
            else if (user.type == 3) this.ruter.navigate(["admin"])
          })
      })
    } else {
      this.lService.getAllLots().subscribe((lots: Lot[])=>{
        let id = lots[lots.length-1].id + 1
        this.lService.addLot(id, this.description, this.city, this.district, this.street, this.number, this.type, this.floors, this.sqMeters, this.rooms, this.equipped,
          this.rent, this.price, user.username, false, this.images, this.video).subscribe(()=>{
            this.ruter.navigate(["user"])
          })
      })
    }
  }
}
