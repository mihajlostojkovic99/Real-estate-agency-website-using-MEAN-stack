import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getAllRents(){
    return this.http.get(`${this.uri}/rents/getAllRents`)
  }

  getRentsForID(id){
    const data = {
      id: id
    }
    return this.http.post(`${this.uri}/rents/getRentsForID`, data)
  }

  addRent(id, lotID, startDate, endDate, totalPrice, proposer) {
    const data = {
      id: id,
      approved: false,
      ownerApproved: false,
      lotID: lotID,
      startDate: startDate,
      endDate: endDate,
      totalPrice: totalPrice,
      proposer: proposer,
      profit: 0
    }
    return this.http.post(`${this.uri}/rents/addRent`, data)
  }

  ownerApproveRent(id, profit){
    const data = {
      id: id,
      profit: profit
    }
    return this.http.post(`${this.uri}/rents/ownerApproveRent`, data)
  }

  agentApproveRent(id){
    const data = {
      id: id
    }
    return this.http.post(`${this.uri}/rents/agentApproveRent`, data)
  }

  deleteRent(id){
    const data = {
      id: id
    }
    return this.http.post(`${this.uri}/rents/deleteRent`, data)
  }
}
