import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutUsService } from 'src/app/services/about-us.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-about-us.component.html',
  styleUrls: ['./view-about-us.component.scss']
})
export class ViewAboutUsComponent implements OnInit {

  ID: String="";
  Details:any;
  router: any;
  constructor(private AboutUsService: AboutUsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.ID=data.ID;
      console.log( data.ID)
      console.log( this.ID)
    })

    this.AboutUsService.viewAboutUs(this.ID).subscribe(data => {
      
      this.Details=data;
      console.log(this.Details)
    })

     
  }
}
