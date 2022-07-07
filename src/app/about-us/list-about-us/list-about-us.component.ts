import { Component, OnInit } from '@angular/core';
import { AboutUsService } from 'src/app/services/about-us.service';


@Component({
  selector: 'app-list-about-us',
  templateUrl: './list-about-us.component.html',
  styleUrls: ['./list-about-us.component.scss']
})
export class ListAboutUsComponent implements OnInit {

  listAboutUs: any;
  constructor(private AboutUsService : AboutUsService) { }
  ngOnInit(): void {
    this.AboutUsService.listAboutUs().subscribe(data => {
      this.listAboutUs=data;
      console.log(data)
    });

    
  }

}
