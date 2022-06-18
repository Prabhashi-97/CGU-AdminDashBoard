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
      confirmButtonText: 'Yes, Delete!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed){
       
        if(this.ProgramId){
      
          this.ProgramService.deleteProgram(this.ProgramId).subscribe(data=>{
            swalWithBootstrapButtons.fire({
              position: 'center',
              icon: 'success',
              title: 'Deleted!',
              text:'Event Deleted Successfully!',
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
              title: 'Unable to Delete Event!',
              showConfirmButton: false,
              timerProgressBar: true,
              timer: 2500
            })
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
        this.router.navigateByUrl('/programs/list');
      })
      
    }
    
    }
    