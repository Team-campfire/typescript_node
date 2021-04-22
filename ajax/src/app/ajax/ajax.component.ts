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
  public rcode: string;
  public num: string;

  constructor(private httpService: HttpService) {
    this.loginStatus = "";
    this.email = "";
    this.theHtmlString = "";
    this.rcode = "";
    this.num = "";
  }

  ngOnInit(): void {
    this.num = "8";
    this.httpService.sendGetRequest('/random2/' + this.num).subscribe((data) => {

      interface RandomObj2 {
        msg: string;
      }

      let obj: RandomObj2 = JSON.parse(JSON.stringify(data));
      this.theHtmlString = obj.msg;
    })
    this.rcode = this.makeid(8);
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

       // send parameter from typescript to node
       // https://stackoverflow.com/questions/44280303/angular-http-get-with-parameter

       // query string
       // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
       // https://stackoverflow.com/questions/17007997/how-to-access-the-get-parameters-after-in-express
      interface RandomObj {
        msg: string;
      }

      let obj: RandomObj = JSON.parse(JSON.stringify(data));
      this.loginStatus = obj.msg;
    })
  }

  makeid(length: number): string {
    let result: string[] = [];
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!&%$#@*^';
    let charactersLength: number = characters.length;
    for (let i: number = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
  }

}
