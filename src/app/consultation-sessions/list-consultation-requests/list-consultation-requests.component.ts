import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConsultationSessionService } from 'src/app/services/consultation-session.service';

@Component({
  selector: 'app-list-consultation-requests',
  templateUrl: './list-consultation-requests.component.html',
  styleUrls: ['./list-consultation-requests.component.scss'],
})
export class ListConsultationRequestsComponent implements OnInit {
  listConsultationRequests: any;
  listScheduledSessions: any;
  filterRequestsForm: FormGroup = new FormGroup({});
  filterSessionsForm: FormGroup = new FormGroup({});
  sessionType: string = 'false';
  scheduledSessionType: string = 'false';
  p: number = 1;
  p2: number = 1;
  constructor(
    private consultationRequestService: ConsultationSessionService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filterRequestsForm = this.formBuilder.group({
      sessionType: new FormControl(''),
    });

    if (this.sessionType == 'false') {
      this.consultationRequestService
        .listConsultationRequests()
        .subscribe((data) => {
          this.listConsultationRequests = data;
        });
    }
    this.filterSessionsForm = this.formBuilder.group({
      scheduledSessionType: new FormControl(''),
    });
    if (this.scheduledSessionType == 'false') {
      this.consultationRequestService
        .listScheduledSessions()
        .subscribe((data) => {
          this.listScheduledSessions = data;
        });
    }
  }
  filterRequests() {
    this.sessionType = this.filterRequestsForm.value['sessionType'];

    this.consultationRequestService
      .listRequestsbyType(this.sessionType)
      .subscribe((data) => {
        this.listConsultationRequests = data;
      });
  }

  filterSessions() {
    this.scheduledSessionType =
      this.filterSessionsForm.value['scheduledSessionType'];

    this.consultationRequestService
      .listSessionsbyType(this.scheduledSessionType)
      .subscribe((data) => {
        this.listScheduledSessions = data;
      });
  }
}
