import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-delete-news',
  templateUrl: './delete-news.component.html',
  styleUrls: ['./delete-news.component.scss']
})


export class DeleteNewsComponent implements OnInit {

  NewsId: String= '';
  constructor(private activatedRoute: ActivatedRoute,
     private NewsService : NewsService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.NewsId=data.newsId;
      console.log(this.NewsId)
    });

    if(this.NewsId){
      
      this.NewsService.deleteNews(this.NewsId).subscribe(data=>{
        this._snackBar.open("News deleted Successfully");
        this.router.navigateByUrl('News/list');
      },err=>{
        this._snackBar.open("Unable to delete the News");

      }
        )
    }
  }

}
