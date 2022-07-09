import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactUsService } from 'src/app/services/contact-us.service';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-contact-us',
  templateUrl: './update-contact-us.component.html',
  styleUrls: ['./update-contact-us.component.scss']
})
export class UpdateContactUsComponent implements OnInit {

  ID: any;
  contactDetails: any;
  updateContactForm: FormGroup = new FormGroup({});
  dataLoaded: boolean =false;

  constructor(private activatedRoute: ActivatedRoute,
    private ContactUsService: ContactUsService,
    private formBuilder : FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe(data=>{
      this.ID=data.ID;
    });

    if(this.ID !==''){
      this.ContactUsService.viewContactUs(this.ID)
      .toPromise()
      .then(data=>{
        this.contactDetails=data;
        console.log(this.contactDetails);

      this.updateContactForm= this.formBuilder.group({
          'NameOf': new FormControl(this.contactDetails[0].NameOf, [Validators.required]),
          'Title': new FormControl(this.contactDetails[0].Title, [Validators.required]),
          'Faculty': new FormControl(this.contactDetails[0].Faculty, [Validators.required]),
          'Email': new FormControl(this.contactDetails[0].Email, [Validators.required, Validators.email]),
          'PhNum': new FormControl(this.contactDetails[0].PhNum, [Validators.minLength(10), Validators.pattern("^[0-9]*$"), Validators.maxLength(10)])
        })

        
      this.dataLoaded=true;
      })

      .catch(err=>{
        console.log(err);
      })

    }
  }

  updateContacts(){
    var obj = {
      NameOf : this.updateContactForm.value.NameOf,
      ID : this.ID,
      Title: this.updateContactForm.value.Title,
      Faculty :this.updateContactForm.value.Faculty,
      Email: this.updateContactForm.value.Email,
      PhNum: this.updateContactForm.value.PhNum
    };

    this.ContactUsService.UpdateContactUs(this.ID,obj).subscribe(data =>{
      console.log(obj)
      this._snackBar.open("News Updated Successfully");
      this.router.navigateByUrl('contact-us/list');
    }, err =>{
      this._snackBar.open("Unable to Update News")
    })
  }
}
