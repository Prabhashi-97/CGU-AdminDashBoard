
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
// import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  listNews: any;
  constructor(private NewsService : NewsService) { }

  ngOnInit(): void {
    this.NewsService.listNews().subscribe(data => {
      this.listNews=data;
    });

    
  }

}
