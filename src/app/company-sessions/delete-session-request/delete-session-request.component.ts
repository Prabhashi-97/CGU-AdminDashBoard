import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanySessionService } from 'src/app/services/company-session.service';

import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-session-request',
  templateUrl: './delete-session-request.component.html',
  styleUrls: ['./delete-session-request.component.scss']
})
export class DeleteSessionRequestComponent implements OnInit {
  sendEmailForm : FormGroup= new FormGroup ({});
  sessionId:any;

 
  constructor(@Inject(MAT_DIALOG_DATA) public data: String,private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,
   private CompanySessionService  : CompanySessionService ,
   private router: Router,public dialogRef: MatDialogRef<DeleteSessionRequestComponent>) { }

  ngOnInit(): void {
    this.sendEmailForm= this.formBuilder.group({
      'reason' : new FormControl(''),
      })
        
    }

    sendEmail(){
      var obj = {
        sessionId : this.data,
        reason : this.sendEmailForm.get('reason')?.value
      };
  
      console.log(obj);

      this.CompanySessionService.deleteSession(this.sessionId,obj).subscribe(data =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Rejected!',
          text:'Session Rejected Successfully!',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 2500,
          buttonsStyling: true,
          confirmButtonColor: 'limegreen', 
        })
        this.closeDialog();
  
        console.log(data);
      }, err =>{
        console.log(err.error.msg);
        Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Unable to Reject Session!',
              showConfirmButton: false,
              timerProgressBar: true,
              timer: 2500
            })
        this.sendEmailForm.reset(); 
      })
   
    }
  
    closeDialog() {
      this.dialogRef.close();
    }
      
    
  
}





































