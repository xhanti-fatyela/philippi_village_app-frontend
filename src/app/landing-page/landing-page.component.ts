import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
   token: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  getPrograms(): void{
    this.token = true
  }
}
