import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanySessionService } from 'src/app/services/company-session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-session-request',
  templateUrl: './delete-session-request.component.html',
  styleUrls: ['./delete-session-request.component.scss']
})
export class DeleteSessionRequestComponent implements OnInit {

  sessionId:String= '';
  constructor(private activatedRoute: ActivatedRoute,
   private CompanySessionService  : CompanySessionService ,
   private router: Router) { }

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
      confirmButtonText: 'Yes, reject!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed){
    if(this.sessionId){
      
      this.CompanySessionService.deleteSession(this.sessionId).subscribe(data=>{
        swalWithBootstrapButtons.fire({
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
      },err=>{
        swalWithBootstrapButtons.fire({
          position: 'center',
          icon: 'error',
          title: 'Unable to Reject Session!',
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
