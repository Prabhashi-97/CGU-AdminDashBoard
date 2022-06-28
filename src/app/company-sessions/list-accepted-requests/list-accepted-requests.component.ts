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
  undergradDetails:any;
  companyDetails:any;
  router: any;
  constructor(private CompanySessionService  : CompanySessionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.sessionId=data.sessionId;
    })

    this.CompanySessionService.viewSession(this.sessionId).subscribe(data => {
      
      this.sessionDetails=data;
      

      this.CompanySessionService.viewCompany(this.sessionDetails[0].companyEmail).subscribe(data => {
      
        this.companyDetails=data;
       
      })

      this.CompanySessionService.getUndergrads(this.sessionId).subscribe(data => {
      
        this.undergradDetails=data;
       
      })
  
    })
  }

}
