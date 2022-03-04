import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultantService } from 'src/app/services/consultant.service';

@Component({
  selector: 'app-update-consultant',
  templateUrl: './update-consultant.component.html',
  styleUrls: ['./update-consultant.component.scss']
})
export class UpdateConsultantComponent implements OnInit {

  consultantId: string='';
  consultantDetails: any;
  dataLoaded: boolean =false;
  updateConsultantForm: FormGroup=new FormGroup({});
  constructor(private activatedRoute: ActivatedRoute,
    private consultantService: ConsultantService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe(data =>{
      this.consultantId=data.consultantId;
      console.log(this.consultantId);
    });
    if(this.consultantId !== ''){
      //view user details
      this.consultantService.viewConsultant(this.consultantId)
      .toPromise()
      .then(data =>{
        this.consultantDetails=data;
        // Object.assign(this.consultantDetails, data);
        console.log(this.consultantDetails);

        //build edit form
        
        this.updateConsultantForm=this.formBuilder.group({
          'consultantFName': new FormControl(this.consultantDetails.consultantFName,[Validators.required]),
        
          'consultantLName': new FormControl(this.consultantDetails.consultantLName,[Validators.required]),
          'universityName': new FormControl(this.consultantDetails.universityName,[Validators.required]),
          'post': new FormControl(this.consultantDetails.post,[Validators.required]),
          'email': new FormControl(this.consultantDetails.email,[Validators.required, Validators.email])
        })
          
        //console.log(this.updateConsultantForm.value.consultantName);
        this.dataLoaded=true;
      })
      .catch(err =>{
        console.log(err);
      })
    }
    
  }
  
  editConsultant(){
    // var obj = {
    //   consultantId : this.consultantId,
    //   consultantFName : this.updateConsultantForm.value.consultantFName,
    //   consultantLName: this.updateConsultantForm.value.consultantLName,
    //   universityName :this.updateConsultantForm.value.universityName,
    //   post: this.updateConsultantForm.value.post,
    //   email: this.updateConsultantForm.value.email

    // };
    this.consultantService.updateConsultant(this.consultantId, this.updateConsultantForm.value).subscribe(data =>{
      this.router.navigate(["/consultants/list"]);
      this._snackBar.open("Consultant Updated Successfully!");
    },err =>{
      this._snackBar.open("Unable to Update Consultant!");
    });
  }

}
