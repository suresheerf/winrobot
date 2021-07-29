import { Component, OnInit } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

      slno : number = 0 ;

      notes:Note[] =[];

  constructor() { }

  ngOnInit():void {
    this.slno = 3;
    this.notes = [
     new Note('new course',
       'new course is starting,limited slots only',
       new Date),
       new Note('new course',
       'new course is starting,limited slots only',
       new Date),
       new Note('new course',
       'new course is starting,limited slots only',
       new Date),new Note('new course',
       'new course is starting,limited slots only',
       new Date)

    ];
  }

}
