import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-accept-vacancies',
  templateUrl: './accept-vacancies.component.html',
  styleUrls: ['./accept-vacancies.component.scss']
})
export class AcceptVacanciesComponent implements OnInit {
  vacancyId: string = '';
  VacancyDetails: any;
  obj:any;

  constructor(private activatedRoute: ActivatedRoute, private VacancyService : VacancyService,
  private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.vacancyId = data.vacancyId;
      // console.log(this.vacancyId);
      if(this.vacancyId){
           this.VacancyService.acceptVacancies(this.vacancyId, this.obj).subscribe(data => {
             console.log(this.vacancyId);
             console.log(this.obj)
             Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Vacancy accepted',
              showConfirmButton: false,
              timer: 1000
            })
           },err => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Unable accept',
              showConfirmButton: false,
              timer: 1000
           })
         
           });
           this.router.navigateByUrl('/vacancies/list');
      }
   })
  }
}

  //  if(this.vacancyId){
  //    this.VacancyService.acceptVacancies(this.vacancyId).subscribe(data => {
  //          this._snackBar.open("Vacancy accepted successfully");
  //    },err => {
  //      this._snackBar.open("Unable to accept");

  //    })
  //  }
    // this.activatedRoute.params.subscribe(data => {
    //   this.vacancyId = data.vacancyId
    
     //If the vacancyId is available
    //   if(this.vacancyId ! = ''){
    //   //View vacancy details
    //     this.vacancyService.ViewVacancies(this.vacancyId)
    //     .toPromise()
    //     .then(data=> {
    //       this.VacancyDetails = data;
    //       Object.assign(this.VacancyDetails, data);
    //       console.log(this.VacancyDetails);
      
    // //build the edit form


    //     })

    //   }

    // })
  //  }

