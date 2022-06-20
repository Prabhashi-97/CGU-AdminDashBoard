import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/services/program.service';
import { FormBuilder, FormControl} from '@angular/forms';


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
        // console.log(this.programCat);
        this.ProgramService.listProgramsbyCat(this.programCat).subscribe(data =>{
        this.listPrograms=data;
        // console.log(this.programs);
        
     });
  
    }

    
  }

  filterProgram(){
    // this.refreshPage();
    // console.log("hi");
    // console.log(this.filterProgramForm.value);
    this.programCat = this.filterProgramForm.value['programCat']; 
    // console.log(this.programCat);
   
      this.ProgramService.listProgramsbyCat(this.programCat).subscribe(data =>{
        this.listPrograms=data;
        // console.log(this.programs);
      });
     
    
    
}

  

 
}
