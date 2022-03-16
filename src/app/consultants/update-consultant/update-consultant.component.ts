import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultantService } from 'src/app/services/consultant.service';
import Swal from 'sweetalert2';

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
          'consultantFName': new FormControl(this.consultantDetails.data[0].consultantFName,[Validators.required]),
        
          'consultantLName': new FormControl(this.consultantDetails.data[0].consultantLName,[Validators.required]),
          'universityName': new FormControl(this.consultantDetails.data[0].universityName,[Validators.required]),
          'post': new FormControl(this.consultantDetails.data[0].post,[Validators.required]),
          'email': new FormControl(this.consultantDetails.data[0].email,[Validators.required, Validators.email])
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
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated!',
        text:'Consultant Updated Successfully!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
    },err =>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Unable to Update Consultant!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
    });
    this.router.navigate(["/consultants/list"]);
  }

}
