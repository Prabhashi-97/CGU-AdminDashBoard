import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanySessionService } from 'src/app/services/company-session.service';

@Component({
  selector: 'app-delete-session-request',
  templateUrl: './delete-session-request.component.html',
  styleUrls: ['./delete-session-request.component.scss']
})
export class DeleteSessionRequestComponent implements OnInit {

  sessionId:String= '';
  constructor(private activatedRoute: ActivatedRoute,
   private CompanySessionService  : CompanySessionService ,
   private _snackBar: MatSnackBar,
   private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.sessionId=data.sessionId;
    });

    if(this.sessionId){
      
      this.CompanySessionService.deleteSession(this.sessionId).subscribe(data=>{
        this._snackBar.open("Request deleted Successfully");
        this.router.navigateByUrl('company-sessions/list');
      },err=>{
        this._snackBar.open("Unable to delete the Program");

      }
        )
    }
  }

}
