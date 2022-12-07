import { CardData } from './../../components/simple-card/card-data';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})


export class HomeComponent implements OnInit {

  cards:CardData[] = [
     {
      title:'Weather',
      text:'Use weather API',
      linkText: 'weather',
    },
    {
      title:'Parking',
      text:'Parking API',
      linkText: 'parking',
    }

  ]



  constructor() { }

  ngOnInit(): void {
  }

}
