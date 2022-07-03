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
    if(localStorage.getItem('token') != null)
    {
      localStorage.removeItem('token');
    }
  } 
}
