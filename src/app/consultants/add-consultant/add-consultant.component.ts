import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConsultantService } from 'src/app/services/consultant.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.scss']
})
export class AddConsultantComponent implements OnInit {

  addConsultantForm: FormGroup =new FormGroup({});

  constructor(private formBuilder: FormBuilder, private consultantService:ConsultantService, private router: Router,private  _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addConsultantForm=this.formBuilder.group({
      'consultantFName': new FormControl('', [Validators.required]),
      'consultantLName': new FormControl('', [Validators.required]),
      'universityName': new FormControl('', [Validators.required]),
      'post':new FormControl('',[Validators.required]),
      'email': new FormControl('',[Validators.required, Validators.email])
    })
  }
  
  createConsultant(){
    
    this.consultantService.addConsultant(this.addConsultantForm.value).subscribe(data =>{
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Added!',
        text:'Consultant Added Successfully!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
      
    },err =>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Consultant Email Already Exists!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
    })
    this.router.navigate(["/consultants/list"]);
   
  }

}
