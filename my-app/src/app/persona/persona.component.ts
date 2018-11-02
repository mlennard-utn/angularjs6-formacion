import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public persona: any;

  constructor(private http: HttpClient) {
    // this.http.get('http://localhost:8080/greeting').subscribe((data: any) => {
    //  console.log(data);
    //  this.persona = data;
    // });
    this.getContent();
  }

  getContent(): any {
    this.http.get('http://localhost:8080/greeting')
      .pipe(map((response: any) => {
        console.log(response);
        this.persona = response;
     }));
  }

  ngOnInit() {
  }

}
