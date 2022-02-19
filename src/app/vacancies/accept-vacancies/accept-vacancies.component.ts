import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-accept-vacancies',
  templateUrl: './accept-vacancies.component.html',
  styleUrls: ['./accept-vacancies.component.scss']
})
export class AcceptVacanciesComponent implements OnInit {
  vacancyId: string = '';
  VacancyDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private VacancyService : VacancyService,
  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.vacancyId = data.vacancyId;
      console.log(this.vacancyId);
   });
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

}
}

