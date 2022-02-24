import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  selector: 'app-delete-program',
  templateUrl: './delete-program.component.html',
  styleUrls: ['./delete-program.component.scss']
})


export class DeleteProgramComponent implements OnInit {

  ProgramId: String= '';
  constructor(private activatedRoute: ActivatedRoute,
     private ProgramService : ProgramService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.ProgramId=data.programId;
    });

    if(this.ProgramId){
      
      this.ProgramService.deleteProgram(this.ProgramId).subscribe(data=>{
        this._snackBar.open("Program deleted Successfully");
        this.router.navigateByUrl('programs/list');
      },err=>{
        this._snackBar.open("Unable to delete the Program");

      }
        )
    }
  }

}

