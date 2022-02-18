import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultantService } from 'src/app/services/consultant.service';

@Component({
  selector: 'app-delete-consultant',
  templateUrl: './delete-consultant.component.html',
  styleUrls: ['./delete-consultant.component.scss']
})
export class DeleteConsultantComponent implements OnInit {

  consultantId: string='';
  constructor(private activatedRoute: ActivatedRoute, 
    private consultantService:ConsultantService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.consultantId=data['id'];
    })
    if(this.consultantId){
      this.consultantService.deleteConsultant(this.consultantId).subscribe(data =>{
        this._snackBar.open("Consultant Deleted Successfully!");
        this.router.navigate(["/consultants/list"]);
      }, err =>{
        this._snackBar.open("Unable to Delete Consultant!");
      })
    }
  }

}
