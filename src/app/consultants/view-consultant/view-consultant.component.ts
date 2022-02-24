import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultantService } from 'src/app/services/consultant.service';

@Component({
  selector: 'app-view-consultant',
  templateUrl: './view-consultant.component.html',
  styleUrls: ['./view-consultant.component.scss']
})
export class ViewConsultantComponent implements OnInit {

  consultantId: string='';
  consultantDetails:any;
  
  
  
  constructor(private consultantService: ConsultantService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(data=>{
      this.consultantId=data['consultantId'];
      // console.log(this.consultantId); //--to check whether we are getting the id
    })
    this.consultantService.viewConsultant(this.consultantId).subscribe(data=>{
      this.consultantDetails=data;
      console.log(this.consultantDetails);
    })
    
  }

}
