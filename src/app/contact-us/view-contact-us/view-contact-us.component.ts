import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-view-contact-us',
  templateUrl: './view-contact-us.component.html',
  styleUrls: ['./view-contact-us.component.scss']
})
export class ViewContactUsComponent implements OnInit {

  ID: String="";
  contactDetails:any;
  router: any;
  constructor(private ContactUsService: ContactUsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.ID=data.ID;
      console.log( data.ID)
      // console.log( this.newsId)
    })

    this.ContactUsService.viewContactUs(this.ID).subscribe(data => {
      
      this.contactDetails=data;
      console.log(this.contactDetails)
    })

     
  }
}

