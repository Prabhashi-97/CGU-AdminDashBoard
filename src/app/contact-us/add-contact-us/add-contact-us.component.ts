import { Component, OnInit } from '@angular/core';
import { ContactUsService} from 'src/app/services/contact-us.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-add-contact-us',
  templateUrl: './add-contact-us.component.html',
  styleUrls: ['./add-contact-us.component.scss']
})
export class AddContactUsComponent implements OnInit {

  addContactsForm : FormGroup= new FormGroup ({});
  constructor(private formBuilder: FormBuilder,
    private ContactUsService:ContactUsService,
    private router: Router) { }

  //   titlePattern= "[a-zA-Z]*";
  //   currentDate = new Date();

  //   maxDate:any="";
  
  //   getDate(){
  //   var date:any= new Date();
  //   var toDate:any=date.getDate();
  //   if(toDate<10){
  //     toDate= '0'+toDate;
  //   }
  //   var month = date.getMonth()+1;
  //   if(month<10){
  //     month='0'+month;
  //   }
  //   var year=date.getFullYear();
  //   this.maxDate=year+"-"+month+"-"+toDate;
  // }

  ngOnInit(): void {
    // this.getDate();
  this.addContactsForm= this.formBuilder.group({
   // 'programImage': new FormControl(''),
   'NameOf' : new FormControl('', [Validators.required]),
   'Title': new FormControl('', [Validators.required]),
   'Faculty': new FormControl('', [Validators.required]),
   'Email': new FormControl('', [Validators.required, Validators.email]),
   'PhNum': new FormControl('', [Validators.minLength(10), Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]),
   
 })

}

createContacts(){
 this.ContactUsService.addContactUs(this.addContactsForm.value).subscribe(data =>{

   Swal.fire({
     position: 'center',
     icon: 'success',
     title: 'Added!',
     text:'News Added Successfully!',
     showConfirmButton: false,
     timerProgressBar: true,
     timer: 2500
   });
   this.addContactsForm.reset(); 
 }, err =>{
   Swal.fire({
     position: 'center',
     icon: 'error',
     title: 'Unable to Add News!',
     showConfirmButton: false,
     timerProgressBar: true,
     timer: 2500
   });
 })
 this.router.navigateByUrl('/contact-us/list');
}

}
