import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanySessionService } from 'src/app/services/company-session.service';
import { DeleteSessionRequestComponent } from '../delete-session-request/delete-session-request.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';


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
  constructor(private CompanySessionService  : CompanySessionService, private activatedRoute: ActivatedRoute, private MatDialog : MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.sessionId=data.sessionId;
    })

    this.CompanySessionService.viewSession(this.sessionId).subscribe(data => {
      
      this.sessionDetails=data;

      // this.CompanySessionService.viewCompany(this.sessionDetails[0].companyEmail).subscribe(data => {
      
      //   this.companyDetails=data;
        
      })
    // })

  }

  
  // onOpenDialogClick(){
  //   this.MatDialog.open(DeleteSessionRequestComponent,{
  //     width: '500px',
  //     data:this.sessionId
  //   });
  // }

}
