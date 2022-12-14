import { Component, OnInit,Inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fetch-user-data',
  templateUrl: './fetch-user-data.component.html',
  styleUrls: ['./fetch-user-data.component.css']
})
export class FetchUserDataComponent implements OnInit {

   users: User[];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    console.log("fetch user data constructor intialize");

    http.get<User[]>(baseUrl + 'Demo').subscribe(result => {
      this.users = result;
    }, error => console.error(error));
    
   }

  ngOnInit(): void {
     console.log("fetch user data component intialize");

   
      
  }


}
interface User
{
   name: string;
   email: string;
}
