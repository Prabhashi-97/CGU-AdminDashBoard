import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationSessionService } from 'src/app/services/consultation-session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-session',
  templateUrl: './delete-session.component.html',
  styleUrls: ['./delete-session.component.scss']
})
export class DeleteSessionComponent implements OnInit {
  consultation_id: any;

  constructor(private activatedRoute: ActivatedRoute, 
    private consultantationSessionService:ConsultationSessionService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.consultation_id=data.consultation_id;
      console.log(this.consultation_id);
    })
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true,
        confirmButtonColor: '#C7083F',
        cancelButtonColor: '#40A53C '
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        if(this.consultation_id){
          this.consultantationSessionService.deleteSession(this.consultation_id).subscribe(data =>{ 
            swalWithBootstrapButtons.fire({
              position: 'center',
              icon: 'success',
              title: 'Deleted!',
              text:'Consultation Session Deleted Successfully!',
              showConfirmButton: false,
              timerProgressBar: true,
              timer: 1000
            }
              // 'Deleted!',
              // 'Consultant has been deleted.',
              // 'success'
            )
        }, err =>{
          swalWithBootstrapButtons.fire({
            position: 'center',
            icon: 'error',
            title: 'Unable to Delete Consultation Session!',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1000
          }
            // 'Unable to Delete!',
            // 'Consultant cannot be deleted.',
            // 'error'
          )
        })
          
      }
        
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          '',
          'error'
        )
      }
      this.router.navigate(["/consultation-session/list"]);
    })
  }

}
