import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe(data =>{
      this.consultantId=data['id'];
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
          'consultantName': new FormControl(this.consultantDetails.consultantName,[Validators.required]),
        
          'title': new FormControl(this.consultantDetails.title,[Validators.required]),
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
    this.consultantService.updateConsultant(this.consultantId, this.updateConsultantForm.value).subscribe(data =>{
      this._snackBar.open("Consultant Updated Successfully!");
    },err =>{
      this._snackBar.open("Unable to Update Consultant!");
    });
  }

}
