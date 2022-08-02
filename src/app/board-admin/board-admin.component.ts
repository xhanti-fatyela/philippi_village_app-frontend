import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { Programs } from '../models/add-programs.model';
import { ProgramsService } from '../programs.service';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']}
  )

  export class BoardAdminComponent 
  implements OnInit {

    programs: Programs = {

      title: '',
      description: '',
      published: false,
      picture: '',
      details: '',
      vactitle: '',
      vacdetails: '',
      applylink: '',
      duration: '',
      startdate: '',
      cost: '',
      requirements: ''

      
    }

    submitted = false;

  content?: string
  constructor(private userService: UserService, private router: Router, private programsService: ProgramsService ) { }
  ngOnInit(): void {

    
    if(JSON.parse(`${window.sessionStorage.getItem('auth-user')}`).roles[0] != "ROLE_ADMIN"){
      // alert("Please sign in")
      this.router.navigate(['/home'])
      // return window.location.replace('/home')
      
    }
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }

  savePrograms(): void {
    const data = {
      title: this.programs.title,
      description: this.programs.description,
      picture: this.programs.picture,
      details: this.programs.details,
      vactitle: this.programs.vactitle,
      vacdetails: this.programs.vacdetails,
      applylink: this.programs.applylink,
      duration: this.programs.duration,
      startdate: this.programs.startdate,
      cost: this.programs.cost,
      requirements: this.programs.requirements
    };

    

    this.programsService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });


}

  toggler() {

    this.programs = {

      title: '',
      description: '',
      published: false,
      picture: '',
      details: '',
      vactitle: '',
      vacdetails: '',
      applylink: '',
      duration: ''
      
    }
    
    this.submitted = !this.submitted
  }
  }


