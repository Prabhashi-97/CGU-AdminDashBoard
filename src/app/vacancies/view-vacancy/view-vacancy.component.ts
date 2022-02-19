import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/services/vacancy.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.scss']
})
export class ViewVacancyComponent implements OnInit {
  vacancyId : String = '';
  VacancyDetails : any;
  router : any;
  constructor(private VacancyService : VacancyService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
       this.vacancyId  = data.vacancyId;
       console.log(data.vacancyId);
       console.log(this.vacancyId);
    });
    this.VacancyService.ViewVacancies(this.vacancyId ).subscribe(data => {
       this.VacancyDetails = data;
       console.log(this.VacancyDetails);
       console.log(this.VacancyDetails.data.companyName);
    });
  }

}
// export class ViewVacancyComponent implements OnInit {
//   vacancyId : String = '';
//   VacancyDetails : any;
//   router : any;
//   constructor(private VacancyService : VacancyService, private activatedRoute : ActivatedRoute) { }

//   ngOnInit(): void {
//     this.activatedRoute.params.subscribe(data => {
//        this.vacancyId  = data.id;
//        console.log(this.vacancyId);
//     });
//     this.VacancyService.ViewVacancies(this.vacancyId ).subscribe(data => {
//        this.VacancyDetails = data;
//     });
//   }

// }

