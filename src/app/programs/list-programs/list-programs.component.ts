import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/services/program.service';


@Component({
  selector: 'app-list-programs',
  templateUrl: './list-programs.component.html',
  styleUrls: ['./list-programs.component.scss']
})
export class ListProgramsComponent implements OnInit {

  listPrograms: any;
  constructor(private ProgramService : ProgramService) { }

  ngOnInit(): void {
    // this.refreshPage();
    this.ProgramService.listPrograms().subscribe(data => {
      this.listPrograms=data;
    });

    
  }

 
}
