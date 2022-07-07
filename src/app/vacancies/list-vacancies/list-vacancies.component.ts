import { HttpErrorResponse } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-vacancies',
  templateUrl: './list-vacancies.component.html',
  styleUrls: ['./list-vacancies.component.scss']
})
export class ListVacanciesComponent implements OnInit {
  listVacancies : any = [];
  acceptedvacancies: any = [];
  p:number=1;
  a:number=1;

  constructor(private VacancyService : VacancyService, private router: Router) { }
 
  ngOnInit(): void {
    this.VacancyService.listPendingVacancies().subscribe(data =>{
      this.listVacancies = data as String[];
    },
    (err) => {
      alert("An error occurred")
    })
    this.VacancyService.listAcceptedVacancies().subscribe(data =>{
      this.acceptedvacancies = data as String[];
    },
    (err) => {
      alert("An error occurred")
    }); 
    }  
  }
  



