import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-administrators',
  templateUrl: './add-administrators.component.html',
  styleUrls: ['./add-administrators.component.scss']
})
export class AddAdministratorsComponent implements OnInit {
  addAdminForm : FormGroup= new FormGroup ({});

  constructor(private formBuilder: FormBuilder,
    private AdminService:AdminService,
    private router: Router) { }

  namePattern ="[a-zA-Z]*"; 
  phoneNumPattern = "^((\\+94-?)|0)?[0-9]{10}$";

  ngOnInit(): void {
    this.addAdminForm= this.formBuilder.group({
      'adminFName' : new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]),
      'adminLName': new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'Password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'phone_number': new FormControl('', [Validators.required, Validators.pattern(this.phoneNumPattern)])
    })
  }

  createAdmin(){
    this.AdminService.addAdmin(this.addAdminForm.value).subscribe(data => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Admin registered successfully',
        showConfirmButton: false,
        timer: 1000
      })
    }, error => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Unable to register admin',
        showConfirmButton: false,
        timer: 1000
      })
    });
    this.addAdminForm.reset();
    this.router.navigateByUrl('/admins/list');
  }
}
