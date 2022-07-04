import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-acceptedvacancies',
  templateUrl: './delete-acceptedvacancies.component.html',
  styleUrls: ['./delete-acceptedvacancies.component.scss']
})
export class DeleteAcceptedvacanciesComponent implements OnInit {

  vacancyId: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private VacancyService: VacancyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log("hi");
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
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (this.vacancyId) {
            this.VacancyService. deleteAcceptedVacancies(this.vacancyId).subscribe(
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
