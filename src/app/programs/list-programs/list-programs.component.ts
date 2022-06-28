import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/services/program.service';
import { FormBuilder, FormControl} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-list-programs',
  templateUrl: './list-programs.component.html',
  styleUrls: ['./list-programs.component.scss']
})
export class ListProgramsComponent implements OnInit {
  programCat:String="false";
  listPrograms: any;
  p:number=1;
  filterProgramForm:any;
  constructor(private ProgramService : ProgramService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.filterProgramForm = this.formBuilder.group({
      'programCat': new FormControl(''),
    })
  
      if(this.programCat == "false"){
        this.ProgramService.listProgramsbyCat(this.programCat).subscribe(data =>{
        this.listPrograms=data;
      }, err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status ===401){
            console.log(" You are not an admin")
          }
        }
     });
  
    }

    
  }

  filterProgram(){
    this.programCat = this.filterProgramForm.value['programCat']; 
   
      this.ProgramService.listProgramsbyCat(this.programCat).subscribe(data =>{
        this.listPrograms=data;

      });
    }
}
