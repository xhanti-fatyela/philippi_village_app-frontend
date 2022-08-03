import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']})
  export class ProfileComponent implements OnInit {
  currentUser: any;
  
  constructor(private token: TokenStorageService) { }
  ngOnInit(): void {
    if(!window.sessionStorage.getItem('auth-token')){
      // alert("Please sign in or Login or Register")
      return window.location.replace('/home')
    }
    this.currentUser = this.token.getUser();
  }}

