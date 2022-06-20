import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { ProgramService} from 'src/app/services/program.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {

  addProgramForm : FormGroup= new FormGroup ({});
  time: string="";

  constructor(private formBuilder: FormBuilder,
    private ProgramService:ProgramService,private router: Router
    ) { this.setNow(); }

  ngOnInit(): void {
    this.getDate();
    this.addProgramForm= this.formBuilder.group({
      // 'programImage': new FormControl(''),
      'programName' : new FormControl('',[Validators.required]),
      'programDate': new FormControl('',[Validators.required]),
      'programCat': new FormControl('',[Validators.required]),
      'programDesc': new FormControl('',[Validators.required]),
      'programTime': new FormControl('',[Validators.required])
    })

  }


  createProgram(){
    this.ProgramService.addProgram(this.addProgramForm.value).subscribe(data =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Added!',
        text:'Event Added Successfully!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
      this.router.navigateByUrl('/programs/list');
    }, err =>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Unable to Add Event!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
      this.refreshPage();
     
    })

    this.refreshPage();

   
   
 
  }

  setNow(){
    let now = new Date();
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
    let str = hours + ':' + minutes;
    this.time = str;
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
    console.log(this.minDate)
  }

  refreshPage(){
    window.location.reload();
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

