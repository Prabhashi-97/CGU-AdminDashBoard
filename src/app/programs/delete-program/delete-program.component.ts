import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-delete-program',
  templateUrl: './delete-program.component.html',
  styleUrls: ['./delete-program.component.scss']
})


export class DeleteProgramComponent implements OnInit {

  ProgramId: String= '';
  constructor(private activatedRoute: ActivatedRoute,
     private ProgramService : ProgramService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.ProgramId=data.programId;
    });
    if(this.ProgramId){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

       
      
      
          this.ProgramService.deleteProgram(this.ProgramId).subscribe(data=>{
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Event deleted successfully',
              showConfirmButton: true,  
              buttonsStyling: true,
              confirmButtonColor: 'limegreen',    
            })
          },err=>{
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Unable to delete Event',
              showConfirmButton: true,   
            })
            })
         
       } else if (
         result.dismiss === Swal.DismissReason.cancel
       ) {
         swalWithBootstrapButtons.fire(
           'Cancelled',
           '',
           'error'
         )
       }
     })
  }
     this.router.navigateByUrl('programs/list');    

        

    
  }

}

