import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConsultationSessionService } from 'src/app/services/consultation-session.service';

@Component({
  selector: 'app-list-consultation-requests',
  templateUrl: './list-consultation-requests.component.html',
  styleUrls: ['./list-consultation-requests.component.scss']
})
export class ListConsultationRequestsComponent implements OnInit {
  listConsultationRequests: any;
  listScheduledSessions: any;
  filterRequestsForm: FormGroup =new FormGroup({});
  filterSessionsForm:FormGroup =new FormGroup({});
  sessionType: string ="false";
  scheduledSessionType:string="false";
  p:number=1;
  p2:number=1;
  constructor(private consultationRequestService:ConsultationSessionService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filterRequestsForm = this.formBuilder.group({
      'sessionType': new FormControl(''),
    })
    
    if(this.sessionType == "false"){
      console.log(this.sessionType);

    this.consultationRequestService.listConsultationRequests().subscribe(data=>{
      this.listConsultationRequests=data;
      console.log(this.listConsultationRequests);

    });

  }
  this.filterSessionsForm = this.formBuilder.group({
    'scheduledSessionType': new FormControl(''),
  })
  if(this.scheduledSessionType == "false"){
    console.log(this.scheduledSessionType);

  this.consultationRequestService.listScheduledSessions().subscribe(data=>{
    this.listScheduledSessions=data;
    console.log(this.listScheduledSessions);

  });
}
}
filterRequests(){
  console.log("hi");
  console.log(this.filterRequestsForm.value);
  this.sessionType = this.filterRequestsForm.value['sessionType']; 
  console.log(this.sessionType);  
  this.consultationRequestService.listRequestsbyType(this.sessionType).subscribe(data =>{
    this.listConsultationRequests = data;
    console.log(this.listConsultationRequests);
  });
}

filterSessions(){
  console.log("hiioo");
  console.log(this.filterSessionsForm.value);
  this.scheduledSessionType = this.filterSessionsForm.value['scheduledSessionType']; 
  console.log(this.scheduledSessionType);  
  this.consultationRequestService.listSessionsbyType(this.scheduledSessionType).subscribe(data =>{
    this.listScheduledSessions = data;
    console.log(this.listScheduledSessions);
  });
}
}
