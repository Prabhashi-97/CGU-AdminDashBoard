import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-list-contact-us',
  templateUrl: './list-contact-us.component.html',
  styleUrls: ['./list-contact-us.component.scss']
})
export class ListContactUsComponent implements OnInit {

  listContactUs:any;
  constructor(private ContactUsService : ContactUsService) { }

  ngOnInit(): void {
    this.ContactUsService.listContactUs().subscribe(data => {
      this.listContactUs=data;
      console.log(this.listContactUs);
    });

  }

}
