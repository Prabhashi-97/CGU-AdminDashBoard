import { Component, OnInit } from '@angular/core';
import { NewsService} from 'src/app/services/news.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';
import { AboutUsService } from 'src/app/services/about-us.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-add-about-us',
  templateUrl: './add-about-us.component.html',
  styleUrls: ['./add-about-us.component.scss']
})
export class AddAboutUsComponent implements OnInit {

  addAboutUsForm : FormGroup= new FormGroup ({});
  constructor(private formBuilder: FormBuilder,
    private AboutUsService:AboutUsService,
    private router: Router) { }

    titlePattern= "[a-zA-Z]*";

  ngOnInit(): void {
    this.addAboutUsForm= this.formBuilder.group({
     'title' : new FormControl(''),
     'aboutUsDescription': new FormControl(''),
   })

 }

 createAboutUs(){
   this.AboutUsService.addAboutUs(this.addAboutUsForm.value).subscribe(data =>{

     Swal.fire({
       position: 'center',
       icon: 'success',
       title: 'Added!',
       text:'Added Successfully!',
       showConfirmButton: false,
       timerProgressBar: true,
       timer: 2500
     });
     this.addAboutUsForm.reset(); 
   }, err =>{
     Swal.fire({
       position: 'center',
       icon: 'error',
       title: 'Unable to Add!',
       showConfirmButton: false,
       timerProgressBar: true,
       timer: 2500
     });
     
   })
   this.router.navigateByUrl('/about-us/list');
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

