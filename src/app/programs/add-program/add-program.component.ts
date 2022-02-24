
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProgramService} from 'src/app/services/program.service';



@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {

  addProgramForm : FormGroup= new FormGroup ({});
  url="assets/careerfair.jpg";

  constructor(private formBuilder: FormBuilder,
    private ProgramService:ProgramService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addProgramForm= this.formBuilder.group({
      // 'programImage': new FormControl(''),
      'programName' : new FormControl(''),
      'programDate': new FormControl(''),
      'programCat': new FormControl(''),
      'programDesc': new FormControl('')
    })

  }


  createProgram(){
    this.ProgramService.addProgram(this.addProgramForm.value).subscribe(data =>{
      this._snackBar.open("Event Added Successfully");
      this.addProgramForm.reset(); 
    }, err =>{
      this._snackBar.open("Unable to Add Event")
    })
 
  }

  onSelectFile(e: any){
    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

 

 
 
}

