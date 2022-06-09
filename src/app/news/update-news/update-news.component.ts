import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent implements OnInit {

  newsId: any;
  newsDetails: any;
  updateNewsForm: FormGroup = new FormGroup({});
  dataLoaded: boolean =false;
  // url="assets/careerfair.jpg";

  constructor(private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private formBuilder : FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe(data=>{
      this.newsId=data.newsId;
    });

    if(this.newsId !==''){
      //view user details
      this.newsService.viewNews(this.newsId)
      .toPromise()
      .then(data=>{
        this.newsDetails=data;
        console.log(this.newsDetails);
        // Object.assign(this.programDetails, data);
        // console.log(this.programDetails.value);
        
        

      this.updateNewsForm= this.formBuilder.group({
          // 'event-image': new FormControl('this.programDetails.'),
          'newsName': new FormControl(this.newsDetails[0].newsName),
          
          'newsDate': new FormControl(this.newsDetails[0].newsDate),
          'newsCat': new FormControl(this.newsDetails[0].newsCat),
          'newsDesc': new FormControl(this.newsDetails[0].newsDesc)
        })

        
      this.dataLoaded=true;
      })

      .catch(err=>{
        console.log(err);
      })

    }
  }

  updateNews(){
    var obj = {
      programName : this.updateNewsForm.value.programName,
      programId : this.newsId,
      programDesc: this.updateNewsForm.value.programDesc,
      programCat :this.updateNewsForm.value.programCat,
      programDate: this.updateNewsForm.value.programDate

    };
    this.newsService.UpdateNews(this.newsId,obj).subscribe(data =>{
      console.log(obj)
      this._snackBar.open("News Updated Successfully");
      this.router.navigateByUrl('news/list');
    }, err =>{
      this._snackBar.open("Unable to Update News")
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
