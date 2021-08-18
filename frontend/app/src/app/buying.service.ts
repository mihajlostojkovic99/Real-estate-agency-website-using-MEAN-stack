import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyingService {
  
  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getAllBuyRequests(){
    return this.http.get(`${this.uri}/buyRequests/getAllBuyRequests`)
  }

  getBuyRequestsForID(id){
    const data = {
      id: id
    }
    return this.http.post(`${this.uri}/buyRequests/getBuyRequestsForID`, data)
  }

  addBuyRequest(id, lotID, price, proposer) {
    const data = {
      id: id,
      approved: false,
      ownerApproved: false,
      lotID: lotID,
      price: price,
      proposer: proposer,
      profit: 0
    }
    return this.http.post(`${this.uri}/buyRequests/addBuyRequest`, data)
  }

  ownerApproveBuyRequest(id, profit){
    const data = {
      id: id,
      profit: profit
    }
    return this.http.post(`${this.uri}/buyRequests/ownerApproveBuyRequest`, data)
  }

  agentApproveBuyRequest(id){
    const data = {
      id: id
    }
    return this.http.post(`${this.uri}/buyRequests/agentApproveBuyRequest`, data)
  }

  deleteBuyRequest(id){
    const data = {
      id: id
    }
    return this.http.post(`${this.uri}/buyRequests/deleteBuyRequest`, data)
  }
}
