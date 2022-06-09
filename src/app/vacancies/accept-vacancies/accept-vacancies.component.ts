import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Router } from '@angular/router';
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
  private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.vacancyId = data.vacancyId;
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
              title: 'Unable to accept',
              showConfirmButton: false,
              timer: 1000
           }) 
           });
           this.router.navigateByUrl('/vacancies/list');
      }
   })
  }
}

  