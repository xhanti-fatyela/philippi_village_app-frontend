import { Component, OnInit } from '@angular/core';
import { Programs } from '../programs';
import { ActivatedRoute } from '@angular/router';
import { ProgramsService } from '../programs.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  program?: Programs
  constructor( private route: ActivatedRoute, private programService: ProgramsService ) { }

  ngOnInit(): void {
    this.getProgram()
  }

  getProgram(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.programService.get(id)
      .subscribe( elem => {
        this.program = elem
        console.log(this.program)
      })
  }

}
