import { Component, OnInit } from '@angular/core';
import { CompanySessionService } from 'src/app/services/company-session.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DeleteSessionRequestComponent } from '../delete-session-request/delete-session-request.component';

@Component({
  selector: 'app-list-session-requests',
  templateUrl: './list-session-requests.component.html',
  styleUrls: ['./list-session-requests.component.scss']
})
export class ListSessionRequestsComponent implements OnInit {
  p:number=1;
  page:number=1;
  listSessionPendingRequests: any;
  listSessionAcceptedRequests: any;
  constructor(private companySessionService : CompanySessionService,private MatDialog : MatDialog) { }

  ngOnInit(): void {
    this.companySessionService.listSessionPendingRequests().subscribe(data => {
      this.listSessionPendingRequests=data;
      // console.log(this.listSessionPendingRequests)
    });

    this.companySessionService.listSessionAcceptedRequests().subscribe(data => {
      this.listSessionAcceptedRequests=data;
    });
  }

  onOpenDialogClick(sessionId : any){
    console.log("Session id ", sessionId);
    
    this.MatDialog.open(DeleteSessionRequestComponent,{
      width: '500px',
      data:sessionId
    });
  }

}
