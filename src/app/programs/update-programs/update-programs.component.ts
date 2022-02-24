import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-programs',
  templateUrl: './update-programs.component.html',
  styleUrls: ['./update-programs.component.scss']
})
export class UpdateProgramsComponent implements OnInit {

  programId: any;
  programDetails: any;
  editProgramForm: FormGroup = new FormGroup({});
  dataLoaded: boolean =false;
  // url="assets/careerfair.jpg";

  constructor(private activatedRoute: ActivatedRoute,
    private programService: ProgramService,
    private formBuilder : FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe(data=>{
      this.programId=data.programId;
    });

    if(this.programId !==''){
      //view user details
      this.programService.viewProgram(this.programId)
      .toPromise()
      .then(data=>{
        this.programDetails=data;
        console.log(this.programDetails);
        // Object.assign(this.programDetails, data);
        // console.log(this.programDetails.value);
        
        

      this.editProgramForm= this.formBuilder.group({
          // 'event-image': new FormControl('this.programDetails.'),
          'programName': new FormControl(this.programDetails[0].programName),
          
          'programDate': new FormControl(this.programDetails[0].programDate),
          'programCat': new FormControl(this.programDetails[0].programCat),
          'programDesc': new FormControl(this.programDetails[0].programDesc)
        })

        
      this.dataLoaded=true;
      })

      .catch(err=>{
        console.log(err);
      })

    }
  }

  updateProgram(){
    var obj = {
      programName : this.editProgramForm.value.programName,
      programId : this.programId,
      programDesc: this.editProgramForm.value.programDesc,
      programCat :this.editProgramForm.value.programCat,
      programDate: this.editProgramForm.value.programDate

    };
    this.programService.editProgram(this.programId,obj).subscribe(data =>{
      console.log(obj)
      this._snackBar.open("Event Updated Successfully");
      this.router.navigateByUrl('programs/list');
    }, err =>{
      this._snackBar.open("Unable to Update Event")
    })
  }



  // onSelectFile(e: any){
  //   if(e.target.files){
  //     var reader= new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.url=event.target.result;
  //     }
  //   }
  // }

}

