import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {COURSES} from '../../mock-courses';
import {Course} from '../../Course';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() course!: Course;
  @Output() onDeleteCourse: EventEmitter<Course> = new EventEmitter();
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(course: any){
    this.onDeleteCourse.emit(course);
  }

  public show: boolean = false;
  public buttonName: any = true;

toggle() {
    this.show = !this.show;
    if(this.show)
        this.buttonName = false;
    else
        this.buttonName = true;
}

}
