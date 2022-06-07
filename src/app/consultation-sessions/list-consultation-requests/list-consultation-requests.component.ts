import { Component, OnInit } from '@angular/core';
import { ConsultationSessionService } from 'src/app/services/consultation-session.service';

@Component({
  selector: 'app-list-consultation-requests',
  templateUrl: './list-consultation-requests.component.html',
  styleUrls: ['./list-consultation-requests.component.scss']
})
export class ListConsultationRequestsComponent implements OnInit {
  listConsultationRequests: any;
  listScheduledSessions: any;
  constructor(private consultationRequestService:ConsultationSessionService) { }


  ngOnInit(): void {
    this.consultationRequestService.listConsultationRequests().subscribe(data=>{
      this.listConsultationRequests=data;

    });

    this.consultationRequestService.listScheduledSessions().subscribe(data=>{
      this.listScheduledSessions=data;
      console.log(this.listScheduledSessions);

    });
  }

}
