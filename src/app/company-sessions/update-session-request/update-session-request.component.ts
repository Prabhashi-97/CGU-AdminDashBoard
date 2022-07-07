import { Component, OnInit } from '@angular/core';
import {CompanySessionService } from 'src/app/services/company-session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-session-request',
  templateUrl: './update-session-request.component.html',
  styleUrls: ['./update-session-request.component.scss']
})
export class UpdateSessionRequestComponent implements OnInit {

  sessionId: any;
  sessionDetails: any;
  obj:any
  constructor(private CompanySessionService: CompanySessionService,private router: Router,private activatedRoute: ActivatedRoute,private MatSnackBar : MatSnackBar ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.sessionId=data.sessionId;
    })
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true,
      confirmButtonColor: 'limegreen',
      cancelButtonColor:'red'
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, accept!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed){

    
    if(this.sessionId){
      this.CompanySessionService.editSession(this.sessionId,this.obj).subscribe(data =>{
      swalWithBootstrapButtons.fire({
      position: 'center',
      icon: 'success',
      title: 'Accepted!',
      text:'Session accepted Successfully!',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2500,
      buttonsStyling: true,
      confirmButtonColor: 'limegreen', 
    })
      }, err =>{
        swalWithBootstrapButtons.fire({
          position: 'center',
          icon: 'error',
          title: 'Unable to Accept Session!',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 2500
        })
      })
        
    }
      
    } else if (
      //handling dismissals
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        '',
        'error'
      )
    }
    this.router.navigateByUrl('/company-sessions/list');
  })
  
 }
}