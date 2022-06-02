import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService} from 'src/app/services/admin.service';


@Component({
  selector: 'app-add-administrators',
  templateUrl: './add-administrators.component.html',
  styleUrls: ['./add-administrators.component.scss']
})
export class AddAdministratorsComponent implements OnInit {
  addAdminForm : FormGroup= new FormGroup ({});

  constructor(private formBuilder: FormBuilder,
    private AdminService:AdminService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addAdminForm= this.formBuilder.group({
      'adminFName' : new FormControl(''),
      'adminLName': new FormControl(''),
      'adminPassward': new FormControl(''),
      'email': new FormControl(''),
      'phoneNumber': new FormControl('')
    })
  }

  createAdmin(){
    this.AdminService.addAdmin(this.addAdminForm.value).subscribe(data =>{
      this._snackBar.open("Admin Added Successfully");
      this.addAdminForm.reset(); 
    }, err =>{
      this._snackBar.open("Unable to Add Admin")
    })
  }

}
