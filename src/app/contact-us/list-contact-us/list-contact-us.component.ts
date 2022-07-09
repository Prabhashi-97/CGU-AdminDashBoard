import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-list-contact-us',
  templateUrl: './list-contact-us.component.html',
  styleUrls: ['./list-contact-us.component.scss']
})
export class ListContactUsComponent implements OnInit {

  listContacts: any;
  Contacts:any;
  filterContactsForm:any;
  Faculty:String="false";
  constructor(private ContactUsService : ContactUsService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.filterContactsForm = this.formBuilder.group({
      'Faculty': new FormControl(''),
    })
  if(this.Faculty == "false"){
    console.log(this.Faculty);
    this.ContactUsService.listContactsbyFac(this.Faculty).subscribe(data =>{
    this.Contacts=data;
    console.log(this.Contacts);
 });

}
}
filterProgram(){
  this.Faculty = this.filterContactsForm.value['Faculty']; 
      this.ContactUsService.listContactsbyFac(this.Faculty).subscribe(data =>{
        this.Contacts=data;
     
      }); 
}
}