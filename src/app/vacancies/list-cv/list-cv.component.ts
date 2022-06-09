import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.scss']
})
export class ListCvComponent implements OnInit {

  listCVs : any = [];
  constructor(private VacancyService : VacancyService) { }

  ngOnInit(): void {
    this.VacancyService. listLinks().subscribe(data =>{
      this.listCVs = data as String[];
      console.log(this.listCVs);
    });
  }

 }
