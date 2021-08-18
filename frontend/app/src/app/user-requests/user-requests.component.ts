import { Component, OnInit } from '@angular/core';
import { BuyingService } from '../buying.service';
import { LotService } from '../lot.service';
import { BuyRequest } from '../models/buyRequest';
import { Lot } from '../models/lot';
import { Rent } from '../models/rent';
import { User } from '../models/user';
import { RentService } from '../rent.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent implements OnInit {

  constructor(private lService: LotService, private rService: RentService, private bService: BuyingService, private uService: UserService) { }

  type: number

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedIn'))

    if (this.user.type == 2){
      this.type = 2
       this.lService.getAllLots().subscribe((data: Lot[])=>{
         this.myLots = data

         this.rService.getAllRents().subscribe((data: Rent[])=>{
           this.rentRequests = []
           for (let d of data){
             for (let l of this.myLots){
               if (d.lotID == l.id && l.owner == 'agencija' && d.approved == false) {
                 d.startDateAsDate = new Date(d.startDate)
                 d.endDateAsDate = new Date(d.endDate)
                 this.rentRequests.push(d)
                 break
               }
               else if (d.lotID == l.id && l.owner != 'agencija' && d.ownerApproved == true && d.approved == false) {
                  d.startDateAsDate = new Date(d.startDate)
                  d.endDateAsDate = new Date(d.endDate)
                  this.rentRequests.push(d)
                  break
               }
             }
           }
         })

         this.bService.getAllBuyRequests().subscribe((data: BuyRequest[])=>{
          this.buyRequests = []
          for (let d of data){
            for (let l of this.myLots){
              if (d.lotID == l.id && l.owner == 'agencija' && d.approved == false) {
                this.buyRequests.push(d)
                break
              }
              else if (d.lotID == l.id && l.owner != 'agencija' && d.ownerApproved == true && d.approved == false) {
                this.buyRequests.push(d)
                break
              }
            }
          }
        })
       })
       
    } else {
      this.type = 1
      this.lService.findByOwner(this.user.username).subscribe((data: Lot[])=>{
        this.myLots = data
        
        this.rService.getAllRents().subscribe((data: Rent[])=>{
          this.rentRequests = []
          for (let d of data){
            for (let l of this.myLots) {
              if (d.lotID == l.id) {
                this.rentRequests.push(d)
                break
              }
            }
          }
  
          
        })
  
        this.bService.getAllBuyRequests().subscribe((data: BuyRequest[])=>{
          this.buyRequests = []
          for (let d of data){
            for (let l of this.myLots) {
              if (d.lotID == l.id) {
                this.buyRequests.push(d)
                break
              }
            }
          }
        })
        
      })
    }
   
  }

  user: User
  myLots: Lot[]
  buyRequests: BuyRequest[]
  rentRequests: Rent[]

  lotAdress(id){
    let address = ''
    for (let l of this.myLots) {
      if (l.id == id) {
        address = l.city + '(' + l.district + ')' + ', ' + l.street + ' br.' + l.number
        break
      }
    }
    return address
  }

  lotType(id){
    let type = ''
    for (let l of this.myLots) {
      if (l.id == id) {
        type = l.type
        break
      }
    }
    return type
  }

  lotFloor(id){
    let floor = ''
    for (let l of this.myLots) {
      if (l.id == id) {
        if (l.type == 'stan') floor = l.floors.split('-')[0]
        else floor = l.floors
        break  
      }
    }
    return floor
  }

  lotPrice(id){
    let price = 0
    for (let l of this.myLots) {
      if (l.id == id) {
        price = l.price
        break
      }
    }
    return price
  }

  lotOwner(id){
    let username = ''
    for (let l of this.myLots) {
      if (l.id == id) {
        username = l.owner
        break
      }
    }
    return username
  }

  prihvati(id) {

    this.uService.getAllUsers().subscribe((allUsers: User[])=>{
      let profit = 0
      let rent: Rent
      let admin: User
      for (let u of allUsers){
        if (u.type == 3){
          admin = u
          break
        }
      }

      for (let r of this.rentRequests) {
        if (r.id == id) {
          rent = r
          break
        }
      }
      profit = rent.totalPrice * admin.rent

      this.rService.ownerApproveRent(id, profit).subscribe(()=>{
        // this.ngOnInit()
      })
    })

    setTimeout(()=>{
      this.ngOnInit()
    }, 200)

    
    
  }

  prihvatiAgent(id) {
    this.rService.agentApproveRent(id).subscribe(()=>{

      let acceptedRent: Rent
      for (let r of this.rentRequests){
        if (r.id == id) {
          acceptedRent = r
          break
        }
      }

      
      this.rService.getAllRents().subscribe((data: Rent[])=>{
        for (let d of data){
          d.startDateAsDate = new Date(d.startDate)
          d.endDateAsDate = new Date(d.endDate)
          if (d.lotID == acceptedRent.lotID && d.approved == false && d.id!=acceptedRent.id &&
            ((d.startDateAsDate.getTime()>=acceptedRent.startDateAsDate.getTime() && d.startDateAsDate.getTime()<acceptedRent.endDateAsDate.getTime()) || 
            (d.endDateAsDate.getTime()>acceptedRent.startDateAsDate.getTime() && d.endDateAsDate.getTime()<=acceptedRent.endDateAsDate.getTime()) || 
            (d.startDateAsDate.getTime()<acceptedRent.startDateAsDate.getTime() && d.endDateAsDate.getTime()>acceptedRent.endDateAsDate.getTime()))) {
              this.rService.deleteRent(d.id).subscribe(()=>{
                
              })
            }
        }
      })

      this.uService.getAllUsers().subscribe((allUsers: User[])=>{
        let profit = 0
        let rent: Rent
        let admin: User
        for (let u of allUsers){
          if (u.type == 3){
            admin = u
            break
          }
        }
  
        for (let r of this.rentRequests) {
          if (r.id == id) {
            rent = r
            break
          }
        }
        profit = rent.totalPrice * admin.rent
  
        this.rService.ownerApproveRent(id, profit).subscribe(()=>{})
      })

      this.ngOnInit()
    })
    
  }

  odbij(id) {
    this.rService.deleteRent(id).subscribe(resp => {
      
    })

    setTimeout(()=>{
      this.ngOnInit()
    }, 100)
  }

  odbijAgent(id) {
    this.rService.deleteRent(id).subscribe(()=>{
      this.ngOnInit()
    })
  }

  prihvatiBuy(id) {

    this.uService.getAllUsers().subscribe((allUsers: User[])=>{
      let profit = 0
      let buyRequest: BuyRequest
      let admin: User
      for (let u of allUsers){
        if (u.type == 3){
          admin = u
          break
        }
      }

      for (let b of this.buyRequests) {
        if (b.id == id) {
          buyRequest = b
          break
        }
      }
      profit = buyRequest.price * admin.sell

      this.bService.ownerApproveBuyRequest(id, profit).subscribe(()=>{
        this.ngOnInit()
      })
    })
    
    
  }

  prihvatiBuyAgent(id) {
    this.bService.agentApproveBuyRequest(id).subscribe(()=>{
      
      let acceptedBuyRequest: BuyRequest
      for (let b of this.buyRequests){
        if (b.id == id) {
          acceptedBuyRequest = b
          break
        }
      }

      this.lService.findByID(acceptedBuyRequest.lotID).subscribe((l: Lot)=>{
        this.lService.updateLot(l.id, l.description, l.city, l.district, l.street, l.number, l.type, l.floors, l.sqMeters, l.rooms, l.equipped, l.rent, l.price, l.approved, l.promoted, true, l.images, l.video).subscribe(()=>{})
      })

      this.bService.getAllBuyRequests().subscribe((data: BuyRequest[])=>{
        for (let d of data){
          if (d.lotID == acceptedBuyRequest.lotID && d.approved == false && d.id!=acceptedBuyRequest.id) {
              this.bService.deleteBuyRequest(d.id).subscribe(()=>{
                
              })
            }
        }
      })

      this.uService.getAllUsers().subscribe((allUsers: User[])=>{
        let profit = 0
        let buyRequest: BuyRequest
        let admin: User
        for (let u of allUsers){
          if (u.type == 3){
            admin = u
            break
          }
        }
  
        for (let b of this.buyRequests) {
          if (b.id == id) {
            buyRequest = b
            break
          }
        }
        profit = buyRequest.price * admin.sell
  
        this.bService.ownerApproveBuyRequest(id, profit).subscribe(()=>{})
      })
      
      this.ngOnInit()
    })
    
  }

  odbijBuy(id) {
    this.bService.deleteBuyRequest(id).subscribe(()=>{
      // this.ngOnInit()
    })
    setTimeout(()=>{
      this.ngOnInit()
    }, 100)
  }

  odbijBuyAgent(id) {
    this.bService.deleteBuyRequest(id).subscribe(()=>{
      // this.ngOnInit()
    })
    setTimeout(()=>{
      this.ngOnInit()
    }, 100)
  }
}
