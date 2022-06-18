import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanySessionService } from 'src/app/services/company-session.service';


@Component({
  selector: 'app-view-session-request',
  templateUrl: './view-session-request.component.html',
  styleUrls: ['./view-session-request.component.scss']
})
export class ViewSessionRequestComponent implements OnInit {

  sessionId: String="";
  sessionDetails:any;
  companyDetails:any;
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
      console.log(this.sessionDetails[0].companyEmail)

      this.CompanySessionService.viewCompany(this.sessionDetails[0].companyEmail).subscribe(data => {
      
        this.companyDetails=data;
        console.log(this.companyDetails)
      })
    })

  }

}
