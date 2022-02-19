import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { VacancyService } from 'src/app/services/vacancy.service';
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-vacancies',
  templateUrl: './list-vacancies.component.html',
  styleUrls: ['./list-vacancies.component.scss']
})
export class ListVacanciesComponent implements OnInit {
  
  // columns = [
    
  //   {
  //     columnDef: 'CompanyName',
  //     header: 'Company Name',
  //     cell: (element: PeriodicElement) => `${element.name}`,
  //   },
  //   {
  //     columnDef: 'companyEmail',
  //     header: 'Company Email',
  //     cell: (element: PeriodicElement) => `${element.weight}`,
  //   },
  //   {
  //     columnDef: 'vacancyTitle',
  //     header: 'Vacancy Title',
  //     cell: (element: PeriodicElement) => `${element.symbol}`,
  //   },
  // ];
  // dataSource = ELEMENT_DATA;
  // displayedColumns = this.columns.map(c => c.columnDef);
  listVacancies : any = [];
  acceptedvacancies: any = [];
  
  constructor(private activatedRoute: ActivatedRoute,private VacancyService : VacancyService) { }

  ngOnInit(): void {
   
    
    this.VacancyService.listPendingVacancies().subscribe(data =>{
      this.listVacancies = data as String[];
      console.log(this.listVacancies);
      console.log(this.listVacancies.data.length);
    });

    this.VacancyService.listAcceptedVacancies().subscribe(data =>{
      this.acceptedvacancies = data as String[];
      console.log(this.acceptedvacancies);
      console.log(this.acceptedvacancies.data.length);
    });
      
    }
  }



