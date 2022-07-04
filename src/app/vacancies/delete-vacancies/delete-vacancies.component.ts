import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-vacancies',
  templateUrl: './delete-vacancies.component.html',
  styleUrls: ['./delete-vacancies.component.scss'],
})
export class DeleteVacanciesComponent implements OnInit {
  vacancyId: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private VacancyService: VacancyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.vacancyId = data.vacancyId;
    });

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-success',
      },
      buttonsStyling: true,
      confirmButtonColor: 'limegreen',
      cancelButtonColor: 'red',
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, reject it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (this.vacancyId) {
            this.VacancyService.deleteVacancies(this.vacancyId).subscribe(
              (data) => {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Vacancy deleted successfully',
                  showConfirmButton: true,
                  buttonsStyling: true,
                  confirmButtonColor: 'limegreen',
                });
              },
              (err) => {
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Unable to delete Vacancy',
                  showConfirmButton: true,
                });
              }
            );
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Cancelled', '', 'error');
        }
      });
    this.router.navigateByUrl('/vacancies/list');
  }
}
