import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/services/vacancy.service';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-vacancies',
  templateUrl: './list-vacancies.component.html',
  styleUrls: ['./list-vacancies.component.scss']
})
export class ListVacanciesComponent implements OnInit {
  listVacancies : any = [];
  acceptedvacancies: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private VacancyService : VacancyService) { }
 
  ngOnInit(): void {
    this.VacancyService.listPendingVacancies().subscribe(data =>{
      this.listVacancies = data as String[];
    });

    this.VacancyService.listAcceptedVacancies().subscribe(data =>{
      this.acceptedvacancies = data as String[];
      console.log(this.acceptedvacancies);
      console.log(this.acceptedvacancies.data.length);
    }); 
    } 
  }
  



