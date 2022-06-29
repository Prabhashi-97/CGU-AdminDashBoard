import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrls: ['./view-program.component.scss']
})
export class ViewProgramComponent implements OnInit {

  programId: String="";
  programDetails:any;
  undergradDetails:any;
  router: any;
  constructor(private ProgramService: ProgramService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.programId=data.programId;
    })

    this.ProgramService.viewProgram(this.programId).subscribe(data => {
      
      this.programDetails=data;
    })

    this.ProgramService.getUndergrads(this.programId).subscribe(data => {
      
      this.undergradDetails=data;
    })

     
  }
}

