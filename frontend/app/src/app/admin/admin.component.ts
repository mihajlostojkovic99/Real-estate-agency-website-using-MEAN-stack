import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { LotService } from '../lot.service';
import { Lot } from '../models/lot';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private lService: LotService) { }

  ngOnInit(): void {
    let lots: Lot[] = []
    this.lService.getAllLots().subscribe((data: Lot[])=>{
      for (let d of data) {
        if (d.approved && !d.sold) {
          lots.push(d)
        }
      }

      let cities: string[] = []
      
      for (let l of lots){
        let flag = false
        for (let g of cities) {
          if (g == l.city) {
            flag = true
            break
          }
        }
        if (flag == false) {
          cities.push(l.city)
        }
      }

      let num: number[] = []
      for (let c of cities){
        num.push(0)
        for (let l of lots){
          if (l.city == c){
            num[num.length-1]++
          }
        }
      }
    
      var ctx = (document.getElementById('brNekretnina') as HTMLCanvasElement).getContext('2d');
      var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: cities,
          datasets: [{
              label: '',
              data: num,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
        options: {
          title: {
            display: true,
            text: 'Broj nekretnina po gradu',
            fontSize: 24
          },
            scales: {
              yAxes: [{
                display: true,
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  stepSize: 1,
                  fontSize: 16
                }
              }],
              xAxes: [{
                ticks: {
                  fontSize: 16
                }
              }]
            }
        }
      });

      let rent = 0
      let sell = 0
      let rentHouse = 0
      let sellHouse = 0
      for (let l of lots){
        if (l.type == 'stan'){
          if (l.rent) rent++
          else sell++
        } else {
          if (l.rent) rentHouse++
          else sellHouse++
        }
      }
      //CHART STANOVA
      ctx = (document.getElementById('stanovi') as HTMLCanvasElement).getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Stanova na prodaju', 'Stanova na najam', 'Kuća na prodaju', 'Kuća na najam'],
            datasets: [{
                label: '',
                data: [sell, rent, sellHouse, rentHouse],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
          options: {
            title: {
              display: true,
              text: 'Prodaja/Najam',
              fontSize: 24
            },
              scales: {
                yAxes: [{
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    stepSize: 1,
                    fontSize: 16
                  }
                }],
                xAxes: [{
                  ticks: {
                    fontSize: 16
                  }
                }]
              }
          }
        });


        let prvi: number = 0
        let drugi: number = 0
        let treci: number = 0
        let cetvrti: number = 0
        let peti: number = 0
        let sesti: number = 0
        let sedmi: number = 0
        let osmi: number = 0
        let deveti: number = 0

        for (let l of lots){
          if (l.price<200) prvi++
          else if (l.price>200 && l.price<500) drugi++
          else if (l.price>500 && l.price<1000) treci++
          else if (l.price>1000 && l.price<2000) cetvrti++
          else if (l.price>2000 && l.price<5000) peti++
          else if (l.price>5000 && l.price<50000) sesti++
          else if (l.price>50000 && l.price<100000) sedmi++
          else if (l.price>100000 && l.price<500000) osmi++
          else if (l.price>500000) deveti++
            
        }
        //CHART CENOVNIH RANGOVA
      ctx = (document.getElementById('rangovi') as HTMLCanvasElement).getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['0-200EUR', '200-500EUR', '500-1.000EUR', '1.000-2.000EUR', '2.000-5.000EUR', '5.000-50.000EUR', '50.000-100.000EUR', '100.000-500.000EUR', '500.000+EUR'],
            datasets: [{
                label: 'Broj nekretnina po cenovnim rangovima',
                data: [prvi, drugi, treci, cetvrti, peti, sesti, sedmi, osmi, deveti],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 125, 99, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(0, 255, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 125, 99, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 255, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          title: {
            display: true,
            text: 'Broj nekretnina po cenovnim rangovima',
            fontSize: 24
          },
          scales: {
            yAxes: [{
              display: false,
              ticks: {
                beginAtZero: true,
                min: 0,
                stepSize: 1,
                fontSize: 16
              }
            }],
            xAxes: [{
              display: false,
              ticks: {
                fontSize: 16
              }
            }]
          }
        }
        });
    })
  }


  
}
