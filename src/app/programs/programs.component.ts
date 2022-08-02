import { Component, OnInit } from '@angular/core';
import { Programs } from '../programs';
import { ProgramsService } from '../programs.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  programs?: Programs[];
  currentPrograms: Programs = {};
  currentIndex = -1;
  title = '';
  description = '';
  picture = '';
  applylink = '';
  duration = '';
  startdate = '';
  cost = '';
  requirements = '';

  text: any
  constructor(private programsService: ProgramsService, private router: Router) { }

  

  ngOnInit(): void {
    this.retrievePrograms();
  }

  retrievePrograms(): void {
    if(!window.sessionStorage.getItem('auth-token')){
      // alert("Please Login or Register")
      // 
      setTimeout(() => {
        this.router.navigate(['home'])
      }, 2000)
    }
    this.programsService.getAll()
      .subscribe({
        next: (data) => {
          this.programs = data;
          // this.programs.map( (elem, index) => {
          //   if(this.programs) {
          //     this.truncate(elem.description, 60)
          //     this.text= elem.description
      
          //   }
          //   })
          // 
          console.log(data);
        },
        error: (e) => console.log("Hello World")
      });
  }

  truncate(str: any, num: number) {
    if(str.length > num) return str.slice(0, num) + '...'
    else return str
  }

  refreshList(): void {
    this.retrievePrograms();
    this.currentPrograms = {};
    this.currentIndex = -1;
  }

  setActivePrograms(programs: Programs, index: number): void {
    this.currentPrograms = programs;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.programsService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentPrograms = {};
    this.currentIndex = -1;

    this.programsService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.programs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
