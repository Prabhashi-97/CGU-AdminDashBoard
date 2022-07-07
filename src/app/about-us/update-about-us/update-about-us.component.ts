import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutUsService } from 'src/app/services/about-us.service';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-about-us.component.html',
  styleUrls: ['./update-about-us.component.scss']
})
export class UpdateAboutUSComponent implements OnInit {

  ID: any;
  Details: any;
  updateAboutUsForm: FormGroup = new FormGroup({});
  dataLoaded: boolean =false;
  // url="assets/careerfair.jpg";

  constructor(private activatedRoute: ActivatedRoute,
    private AboutUsService: AboutUsService,
    private formBuilder : FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe(data=>{
      this.ID=data.ID;
    });

    if(this.ID !==''){
      //view user details
      this.AboutUsService.viewAboutUs(this.ID)
      .toPromise()
      .then(data=>{
        this.Details=data;
        console.log(this.Details);
        // Object.assign(this.programDetails, data);
        // console.log(this.programDetails.value);
        
        

      this.updateAboutUsForm= this.formBuilder.group({
          // 'event-image': new FormControl('this.programDetails.'),
          'title': new FormControl(this.Details[0].title, Validators.required),
          'aboutUsDescription': new FormControl(this.Details[0].aboutUsDescription)
        })

        
      this.dataLoaded=true;
      })

      .catch(err=>{
        console.log(err);
      })

    }
  }

  updateAboutUs(){
    var obj = {
      title : this.updateAboutUsForm.value.title,
      ID : this.ID,
      aboutUsDescription: this.updateAboutUsForm.value.aboutUsDescription,
    };
    this.AboutUsService.UpdateAboutUs(this.ID,obj).subscribe(data =>{
      console.log(obj)
      this._snackBar.open("Updated Successfully");
      this.router.navigateByUrl('about-us/list');
    }, err =>{
      this._snackBar.open("Unable to Update")
    })
  }



  // onSelectFile(e: any){
  //   if(e.target.files){
  //     var reader= new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.url=event.target.result;
  //     }
  //   }
  // }

}
