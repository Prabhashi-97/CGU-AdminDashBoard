import { Component, OnInit } from '@angular/core';
import { NewsService} from 'src/app/services/news.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  addNewsForm : FormGroup= new FormGroup ({});
  constructor(private formBuilder: FormBuilder,
    private NewsService:NewsService) { }

  ngOnInit(): void {
    this.addNewsForm= this.formBuilder.group({
      // 'programImage': new FormControl(''),
      'title' : new FormControl(''),
      'newsDate': new FormControl(''),
      'newsDescription': new FormControl(''),
      'newsCate': new FormControl(''),
    })

  }

  createNews(){
    this.NewsService.addNews(this.addNewsForm.value).subscribe(data =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Added!',
        text:'News Added Successfully!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
      this.addNewsForm.reset(); 
    }, err =>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Unable to Add News!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
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
