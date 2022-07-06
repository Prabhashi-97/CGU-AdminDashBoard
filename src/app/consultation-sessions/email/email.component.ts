import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationSessionService } from 'src/app/services/consultation-session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  consultation_id: any;
  emailForm: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private ConsultationSessionService: ConsultationSessionService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.consultation_id = data.undergradEmail;

      this.getDate();
      this.emailForm = this.formBuilder.group({
        sessionDate: new FormControl('', [Validators.required]),
        sessionTime: new FormControl('', [Validators.required]),
      });
    });
  }
  sendToScheduled() {
    this.ConsultationSessionService.displayUnderScheduled(
      this.consultation_id,
      this.emailForm.value
    ).subscribe(
      (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Email Sent! <br> Request added to Scheduled Sessions',
          showConfirmButton: false,
          timer: 2500,
        });
        this.refreshPage();
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Cannot Add to Scheduled Sessions',
          showConfirmButton: false,
          timer: 2500,
        });
        this.refreshPage();
      }
    );

    // this.router.navigateByUrl('/consultation-session/list')
    //     .then(() => {
    //          window.location.reload();
    //    });
  }

  refreshPage() {
    window.location.reload();
  }
  minDate: any = '';
  getDate() {
    var date: any = new Date();
    var toDate: any = date.getDate();
    if (toDate < 10) {
      toDate = '0' + toDate;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    var year = date.getFullYear();
    this.minDate = year + '-' + month + '-' + toDate;
  }
}
