import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators'
import { C } from './c.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 courses :C[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchCourses();
  }
  private fetchCourses() {
    this.http.get('http://127.0.0.1:3000/api/courses/')
    .pipe(map( responseData =>{
      const coursesArray = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
             if(key === "data")
             {
               coursesArray.push(...((responseData as any)[key].courses));
             }
          }
        }
        return coursesArray
      }))
    .subscribe(responsec=>{
      this.courses=responsec;
      console.log(this.courses)
    })
  }

}
