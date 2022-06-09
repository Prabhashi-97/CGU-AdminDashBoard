import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultantService } from 'src/app/services/consultant.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-delete-consultant',
  templateUrl: './delete-consultant.component.html',
  styleUrls: ['./delete-consultant.component.scss']
})
export class DeleteConsultantComponent implements OnInit {

  consultantId: string='';
  constructor(private activatedRoute: ActivatedRoute, 
    private consultantService:ConsultantService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.consultantId=data['consultantId'];
      console.log(this.consultantId);
    })
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true,
        confirmButtonColor: '#40A53C',
        cancelButtonColor: '#C7083F '
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
        if(this.consultantId){
          this.consultantService.deleteConsultant(this.consultantId).subscribe(data =>{ 
            swalWithBootstrapButtons.fire({
              position: 'center',
              icon: 'success',
              title: 'Deleted!',
              text:'Consultant Deleted Successfully!',
              showConfirmButton: false,
              timerProgressBar: true,
              timer: 2500
            }
              // 'Deleted!',
              // 'Consultant has been deleted.',
              // 'success'
            )
        }, err =>{
          swalWithBootstrapButtons.fire({
            position: 'center',
            icon: 'error',
            title: 'Unable to Delete Consultant!',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 2500
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
      this.router.navigate(["/consultants/list"]);
    })
    
  }

}
