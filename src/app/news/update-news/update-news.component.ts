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

  newsID: any;
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
      this.newsID=data.newsID;
    });

    if(this.newsID !==''){
      //view user details
      this.newsService.viewNews(this.newsID)
      .toPromise()
      .then(data=>{
        this.newsDetails=data;
        console.log(this.newsDetails);
        // Object.assign(this.programDetails, data);
        // console.log(this.programDetails.value);
        
        

      this.updateNewsForm= this.formBuilder.group({
          // 'event-image': new FormControl('this.programDetails.'),
          'title': new FormControl(this.newsDetails[0].title),
          'newsDate': new FormControl(this.newsDetails[0].newsDate),
          'newsCate': new FormControl(this.newsDetails[0].newsCate),
          'newsDescription': new FormControl(this.newsDetails[0].newsDescription)
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
      title : this.updateNewsForm.value.title,
      newsId : this.newsID,
      newsDescription: this.updateNewsForm.value.newsDescription,
      newsCate :this.updateNewsForm.value.newsCate,
      newsDate: this.updateNewsForm.value.newsDate

    };
    this.newsService.UpdateNews(this.newsID,obj).subscribe(data =>{
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
