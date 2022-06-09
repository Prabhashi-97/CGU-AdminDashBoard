import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent implements OnInit {

  newsId: String="";
  newsDetails:any;
  router: any;
  constructor(private NewsService: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.newsId=data.newsId;
      console.log( data.newsId)
      console.log( this.newsId)
    })

    this.NewsService.viewNews(this.newsId).subscribe(data => {
      
      this.newsDetails=data;
      console.log(this.newsDetails)
    })

     
  }
}
