import { CardData } from './card-data';
import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.sass']
})
export class SimpleCardComponent implements OnInit {

  @Input() data:CardData|undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("xx,",this.data)
  }

  goToLink(){
    this.router.navigate([this.data?.linkText])
  }
}
