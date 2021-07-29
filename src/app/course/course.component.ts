import { Component, OnInit } from '@angular/core';
import { C } from './c.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 courses :C[]=[];
  constructor() { }

  ngOnInit(): void {
    this.courses =[
      new C('arduno uno',4,`in this course you will be  learning about arduno uno and compleate
      ten or more projects using arduno.`,'../../assets/carousel/irresolute_mouse.jpg',599),
      new C('c/c++',4,`in this course you will be  learning about absolute beginning of the programinng
      and this very powerfull low level language.`,'../../assets/carousel/brain_3.jpg',499),
      new C('animation',4,`in this course you will be  learning about basics of animation and will
      create your own design.`,'../../assets/carousel/cool_lion.jpg',1099),
      new C('web development',4,`in this course you will be  learning about arduno uno and compleate
      ten or more projects using arduno.`,'../../assets/carousel/danger_ahead.jpg',1599)
    ]
  }

}
