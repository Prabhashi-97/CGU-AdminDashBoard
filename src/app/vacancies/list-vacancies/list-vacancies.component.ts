import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { VacancyService } from 'src/app/services/vacancy.service';
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import {AfterViewInit, ViewChild} from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-vacancies',
  templateUrl: './list-vacancies.component.html',
  styleUrls: ['./list-vacancies.component.scss']
})
export class ListVacanciesComponent implements OnInit {
  listVacancies : any = [];
  acceptedvacancies: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private activatedRoute: ActivatedRoute,private VacancyService : VacancyService, private router: Router) { }

  ngAfterViewInit() {
    this.listVacancies.paginator = this.paginator;
  }

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
  



