import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import Swal from 'sweetalert2'

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
  time:string="";

  constructor(private activatedRoute: ActivatedRoute,
    private programService: ProgramService,
    private formBuilder : FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.getDate();
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe(data=>{
      this.programId=data.programId;
    });

    if(this.programId !==''){
      //view  details
      this.programService.viewProgram(this.programId)
      .toPromise()
      .then(data=>{
        this.programDetails=data;
        console.log(this.programDetails)
        var dateArr = this.programDetails[0].programDate.toString().split("T");
        this.editProgramForm= this.formBuilder.group({
          // 'event-image': new FormControl('this.programDetails.'),
          'programName': new FormControl(this.programDetails[0].programName,[Validators.required]),
          'programDate': new FormControl(dateArr[0],[Validators.required]),
          'programCat': new FormControl(this.programDetails[0].programCat,[Validators.required]),
          'programDesc': new FormControl(this.programDetails[0].programDesc,[Validators.required]),
          'programTime': new FormControl(this.programDetails[0].programTime,[Validators.required])
        })

       this.time=this.programDetails[0].programTime;
       
       console.log(this.time)


      this.dataLoaded=true;
      })

      .catch(err=>{
        console.log(err);
      })

    }
  }

  updateProgram(){
    console.log(this.editProgramForm.value.programDate);
    
    var obj = {
      programName : this.editProgramForm.value.programName,
      programId : this.programId,
      programDesc: this.editProgramForm.value.programDesc,
      programCat :this.editProgramForm.value.programCat,
      programDate: this.editProgramForm.value.programDate,
      programTime: this.editProgramForm.value.programTime

    };
    this.programService.editProgram(this.programId,obj).subscribe(data =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated!',
        text:'Event Updated Successfully!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
      
    }, err =>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Unable to Update Event!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
    })
    this.router.navigateByUrl('programs/list');
  }

  minDate:any="";
  getDate(){
    var date:any= new Date();
    var toDate:any=date.getDate();
    if(toDate<10){
      toDate= '0'+toDate;
    }
    var month = date.getMonth()+1;
    if(month<10){
      month='0'+month;
    }
    var year=date.getFullYear();
    this.minDate=year+"-"+month+"-"+toDate;
    // console.log(this.minDate)
  }

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