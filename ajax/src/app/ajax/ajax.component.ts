import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})

export class AjaxComponent implements OnInit {

  public loginStatus: string;
  public email: string;
  public theHtmlString: string;

  constructor(private httpService: HttpService) {
    this.loginStatus = "";
    this.email = "";
    this.theHtmlString = "";
  }

  ngOnInit(): void {
    this.httpService.sendGetRequest('/random2').subscribe((data) => {

      interface RandomObj2 {
        msg: string;
      }

      let obj: RandomObj2 = JSON.parse(JSON.stringify(data));
      this.theHtmlString = obj.msg;
    })
  }

  onClickSubmit(mi : any): void {
    // email = data.emailid;
    this.httpService.sendGetRequest('/random/' + mi.emailid).subscribe((data) => {
      // https://angular.io/guide/observables
      // https://stackoverflow.com/questions/44921788/what-is-subscribe-in-angular/51935993
      // https://luukgruijs.medium.com/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3
      /*
       * This quickly gets tedious.
       * Use external libraries.
       */
       // subscribing
       // https://angular.io/guide/observables
       // https://stackoverflow.com/questions/44921788/what-is-subscribe-in-angular/51935993
       // https://luukgruijs.medium.com/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3

       // html binding
       // https://stackoverflow.com/questions/31548311/angular-html-binding
       // https://angular.io/guide/property-binding#binding-targets

       // Property 'theHtmlString' has no initializer and is not definitely assigned in the constructor.
       // https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc

      interface RandomObj {
        msg: string;
      }

      let obj: RandomObj = JSON.parse(JSON.stringify(data));
      this.loginStatus = obj.msg;
    })
  }
}
