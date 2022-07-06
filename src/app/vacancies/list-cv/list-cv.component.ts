import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.scss']
})
export class ListCvComponent implements OnInit {
  listLinks : any = [];
  EmailStatus : any;
  p: number=1;
  checked = false;
  
  constructor(private VacancyService : VacancyService) { }

  ngOnInit(): void {
    this.VacancyService. listLinks().subscribe(data =>{
      this.listLinks = data as String[];
      console.log(this.listLinks);
      // this.EmailStatus = data.sendEmail;
    },
    (err) => {
      alert("An error occurred")
    });
  }
 }
