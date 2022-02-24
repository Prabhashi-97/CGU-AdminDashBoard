import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanySessionService } from 'src/app/services/company-session.service';

@Component({
  selector: 'app-list-accepted-requests',
  templateUrl: './list-accepted-requests.component.html',
  styleUrls: ['./list-accepted-requests.component.scss']
})
export class ListAcceptedRequestsComponent implements OnInit {
  sessionId: String="";
  sessionDetails:any;
  router: any;
  constructor(private CompanySessionService  : CompanySessionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.sessionId=data.sessionId;
      console.log( data.sessionId)
      console.log( this.sessionId)
    })

    this.CompanySessionService.viewSession(this.sessionId).subscribe(data => {
      
      this.sessionDetails=data;
      console.log(this.sessionDetails)
    })
  }

}
