import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lot } from './models/lot';

@Injectable({
  providedIn: 'root'
})
export class LotService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getAllLots(){
    return this.http.get(`${this.uri}/lots/getAllLots`)
  }

  searchCity(city){
    const data = {
      city: city
    }

    return this.http.post(`${this.uri}/lots/searchCity`, data)
  }

  findByID(id){
    const data = {
      id: id
    }

    return this.http.post(`${this.uri}/lots/findByID`, data)
  }

  addLot(id, description, city, district, street, number, type, floors, sqMeters, rooms, equipped, rent, price, owner, approved, images, video){
    

    const data = {
      id: id,
      description: description,
      city: city,
      district: district,
      street: street,
      number: number,
      type: type,
      floors: floors,
      sqMeters: sqMeters,
      rooms: rooms,
      equipped: equipped,
      rent: rent,
      price: price,
      owner: owner,
      approved: approved,
      promoted: false,
      sold: false,
      images: images,
      video: video
    }

    return this.http.post(`${this.uri}/lots/addLot`, data)
    
  }

  updateLot(id, description, city, district, street, number, type, floors, sqMeters, rooms, equipped, rent, price, approved, promoted, sold, images, video){
    const data = {
      id: id,
      description: description,
      city: city,
      district: district,
      street: street,
      number: number,
      type: type,
      floors: floors,
      sqMeters: sqMeters,
      rooms: rooms,
      equipped: equipped,
      rent: rent,
      price: price,
      approved: approved,
      promoted: promoted,
      sold: sold,
      images: images,
      video: video
    }

    return this.http.post(`${this.uri}/lots/updateLot`, data)
  }

  findByOwner(owner){
    const data = {
      owner: owner
    }

    return this.http.post(`${this.uri}/lots/findByOwner`, data)
  }

  deleteByID(id){
    const data = {
      id: id
    }

    return this.http.post(`${this.uri}/lots/deleteByID`, data)
  }
}
