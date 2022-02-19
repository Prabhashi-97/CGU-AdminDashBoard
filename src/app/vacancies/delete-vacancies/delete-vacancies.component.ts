import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-vacancies',
  templateUrl: './delete-vacancies.component.html',
  styleUrls: ['./delete-vacancies.component.scss']
})

export class DeleteVacanciesComponent implements OnInit {
  vacancyId: string = '';
 constructor(private activatedRoute: ActivatedRoute, private VacancyService : VacancyService,
 private _snackBar: MatSnackBar, private router: Router) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(data => {
      this.vacancyId = data.vacancyId;
      console.log(this.vacancyId);
   });
   if(this.vacancyId){
     this.VacancyService.deleteVacancies(this.vacancyId).subscribe(data => {
           this._snackBar.open("Vacancy deleted successfully");
     },err => {
       this._snackBar.open("Unable to delete");
      })
   }
     this.router.navigateByUrl('/vacancies/list');
  }
 }
