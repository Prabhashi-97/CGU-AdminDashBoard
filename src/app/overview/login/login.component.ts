import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';
import {SidebarComponent} from '../../layout/sidebar/sidebar.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userRole = String;
  logInForm: FormGroup = new FormGroup({});
  form: any = {
    email: null,
    adminPassword: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  hide = true;
  // expiresIn:string;
 

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.logInForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      adminPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    console.log(this.logInForm.value)
  }
  onSubmit(): void {
    this.authService.login(this.logInForm.value).subscribe(
      (data) => {
        console.log(data)
        this.tokenStorage.saveToken(data.accessToken);
        localStorage.setItem('token', data.accessToken);
        this.autoLogout();
        if(localStorage.getItem('token') != null)

        // {
        //    alert("login successfull");
        // }

        {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logged In!',
            text:'You Successfully logged in!',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 2500
          });

        }

        this.userRole = this.authService.getRole();
        console.log(this.userRole);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();

      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: err.error.data,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 2500
        });
      }
    );
  }
  reloadPage(): void {
    console.log('reload');

    this.router.navigateByUrl('/overview');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
    this.tokenStorage.logout();
  }

  

  autoLogout(){
    setTimeout(()=>{
      this.logout();
    }, 10000 );
  }




 

 

  




}
