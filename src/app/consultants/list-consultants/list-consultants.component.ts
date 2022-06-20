import { Component, OnInit } from '@angular/core';
import { ConsultantService } from 'src/app/services/consultant.service';


@Component({
  selector: 'app-list-consultants',
  templateUrl: './list-consultants.component.html',
  styleUrls: ['./list-consultants.component.scss']
})
export class ListConsultantsComponent implements OnInit {

  listConsultants: any;
  p:number=1;
 
  constructor(private consultantService: ConsultantService) { }
 
  ngOnInit(): void {
    this.consultantService.listConsultants().subscribe(data=>{
      this.listConsultants=data;
      console.log(this.listConsultants);
    });
  }
  

}
