import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private router: Router ) { }

  ngOnInit(): void {
  }


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/overview/list']);
    this.tokenStorage.logout();
  }

}
