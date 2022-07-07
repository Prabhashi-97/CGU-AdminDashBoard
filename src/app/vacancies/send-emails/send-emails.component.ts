import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-send-emails',
  templateUrl: './send-emails.component.html',
  styleUrls: ['./send-emails.component.scss'],
})
export class SendEmailsComponent implements OnInit {
  linkedin: any;
  obj: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private VacancyService: VacancyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.linkedin = data.linkedin;
      if (this.linkedin) {
        this.VacancyService.sendEmail(this.linkedin).subscribe(
          (data) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Email sent successfully',
              showConfirmButton: false,
              timer: 1000,
            });
          },
          (error) => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Unable to send email',
              showConfirmButton: false,
              timer: 1000,
            });
          }
        );
        this.router.navigateByUrl('vacancies/list/cv');
      }
    });
  }
}
