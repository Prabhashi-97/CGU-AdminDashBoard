import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.generateToken();
  }

  generateToken(){
    this.adminService.generateToken().subscribe(data =>{
      console.log(data);
      var token = JSON.parse(JSON.stringify(data));
      window.localStorage.setItem("token", token.token);
    }, error=>{
      console.log(error);
    })
  }

}
