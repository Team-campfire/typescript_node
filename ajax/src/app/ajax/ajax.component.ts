import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})

export class AjaxComponent implements OnInit {

  constructor(private httpService: HttpService) {
    this.loginStatus = "";
    this.email = ""
  }

  ngOnInit(): void {
  }

  public loginStatus: string;
  public email: string;


   onClickSubmit(mi : any): void {

      // email = data.emailid;
       this.httpService.sendGetRequest('/random/' + mi.emailid).subscribe((data) => {

      /*
       * This quickly gets tedious.
       * Use external libraries.
       */


      interface RandomObj {
        msg: string;
      }

      let obj: RandomObj = JSON.parse(JSON.stringify(data));
      this.loginStatus = obj.msg;
    })
   }
}