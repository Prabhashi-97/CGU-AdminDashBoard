import { Component, OnInit } from '@angular/core';
import { CompanySessionService } from 'src/app/services/company-session.service';

@Component({
  selector: 'app-list-session-requests',
  templateUrl: './list-session-requests.component.html',
  styleUrls: ['./list-session-requests.component.scss']
})
export class ListSessionRequestsComponent implements OnInit {

  listSessionPendingRequests: any;
  listSessionAcceptedRequests: any;
  constructor(private companySessionService : CompanySessionService) { }

  ngOnInit(): void {
    this.companySessionService.listSessionPendingRequests().subscribe(data => {
      this.listSessionPendingRequests=data;
      console.log(this.listSessionPendingRequests)
    });

    this.companySessionService.listSessionAcceptedRequests().subscribe(data => {
      this.listSessionAcceptedRequests=data;
    });
  }

}
