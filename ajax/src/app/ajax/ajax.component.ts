import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient} from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})


export class AjaxComponent implements OnInit {

  // single element

  // name = new FormControl('');

  // updateName() {
  //   this.name.setValue('Nancy');
  // }

  // form group
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  // onSubmit(mi : any): void {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.profileForm.value);
  // }

  // onClickSubmit(mi : any): void {
  //   this.http.post<any>('/submitCategories', {
      // eventCategory:  this.eventCategory,
      // eventDescription:  mi.eventDescription,
      // clubCategory: this.clubCategory,
      // clubDescription:  mi.clubDescription
  //   })
  //   .subscribe((data)  => { console.log(data); }, (err) => {
  //     console.log("Error", err);
  //   });
  // }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // alert(this.profileForm.value.firstName);
    // alert(this.profileForm.get('firstName')!.value);
    // alert(this.profileForm.firstName.value);
    // console.warn(this.profileForm.value);

    let formData: any = new FormData();
    this.fname = this.profileForm.value.firstName;
    formData.append("name", this.profileForm.get('firstName')!.value);
    alert(formData.getAll('name'));

    this.http.get<any>('/submitCategories', formData
      // email:  this.profileForm.value.firstName

      // fname: this.fname
      // eventCategory:  this.eventCategory,
      // eventDescription:  mi.eventDescription,
      // clubCategory: this.clubCategory,
      // clubDescription:  mi.clubDescription
    )
    .subscribe((data)  => { console.log(data); }, (err) => {
      console.log("Error", err);
    });
  }

  // nested form group
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  // nested update
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      },
      colors: {
        color: 'green'
      }
    });
  }

  // form builder

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    colors: this.fb.group({
      color: ['']
    }),
    // aliases
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  // src:
  // https://angular.io/guide/reactive-forms
  // https://v2.angular.io/docs/ts/latest/guide/reactive-forms.html
  // https://www.elite-corner.com/2018/11/angular-json-pipe-example.html
  // https://stackoverflow.com/questions/43713558/how-to-get-a-single-value-from-formgroup

  // https://stackoverflow.com/questions/44602420/angular2-4-populate-form-after-request
  // https://angular.io/api/forms/FormGroup
  // https://stackoverflow.com/questions/49078286/angular-5-reactive-forms-radio-button-group/49078441
  // https://stackoverflow.com/questions/40647073/angular-2-accessing-data-from-formarray
  // https://www.w3schools.com/jsref/met_console_warn.asp
  // https://www.pluralsight.com/guides/how-to-submit-form-data-using-angular
  // https://stackoverflow.com/questions/43800907/typescript-strictnullchecks-object-is-possibly-null
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator

  // https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll
  // https://www.tutorialspoint.com/expressjs/expressjs_form_data.htm
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects

  public loginStatus: string;
  public email: string;
  public theHtmlString: string;
  public rcode: string;
  public num: string;
  public fname: string;

  // constructor() { }

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.loginStatus = "";
    this.email = "";
    this.theHtmlString = "";
    this.rcode = "";
    this.num = "";
    this.fname = "";
  }

  ngOnInit(): void {
    // this.num = "8";
    // alert(this.num);
    //
    // this.httpService.sendGetRequest('/random2/' + this.num).subscribe((data) => {
    //
    //   interface RandomObj2 {
    //     msg: string;
    //   }
    //
    //   let obj: RandomObj2 = JSON.parse(JSON.stringify(data));
    //   this.theHtmlString = obj.msg;
    // })
    // this.rcode = this.makeid(8);
  }

  // onClickSubmit(mi : any): void {
  //   this.http.post<any>('/submitCategories', {
  //     eventCategory:  this.eventCategory,
  //     eventDescription:  mi.eventDescription,
  //     clubCategory: this.clubCategory,
  //     clubDescription:  mi.clubDescription
  //   })
  //   .subscribe((data)  => { console.log(data); }, (err) => {
  //     console.log("Error", err);
  //   });
  // }

  onClickSubmit(mi : any): void {
    // email = data.emailid;
    this.http.get<any>('/random/' + mi.emailid).subscribe((data) => {
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
