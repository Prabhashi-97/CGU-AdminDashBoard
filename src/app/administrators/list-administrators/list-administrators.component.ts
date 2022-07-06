import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-list-administrators',
  templateUrl: './list-administrators.component.html',
  styleUrls: ['./list-administrators.component.scss']
})
export class ListAdministratorsComponent implements OnInit {
  listadmins : any = [];
  userRole : any = [];
  p:number=1;
  user: any;

  constructor(private AdminService : AdminService,  private authService: AuthService,) { }

  ngOnInit(): void {
    this.userRole = this.authService.getRole();
    this.AdminService.listAdmin().subscribe(data =>{
      this.listadmins = data as String[];
    },
    (err) => {
      alert("An error occurred")
    });
  }
  
  
}

