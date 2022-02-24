import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConsultantService } from 'src/app/services/consultant.service';

@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.scss']
})
export class AddConsultantComponent implements OnInit {

  addConsultantForm: FormGroup =new FormGroup({});

  constructor(private formBuilder: FormBuilder, private consultantService:ConsultantService,
    private _snackBar: MatSnackBar) { }

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
      this._snackBar.open("Consultant Added Successfully!");
    },err =>{
      this._snackBar.open("Unable to Add Consultant!");
    })
  }

}
