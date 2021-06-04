import { Component, OnInit } from '@angular/core';
import {Course} from '../../Course';
import {CourseService} from '../../services/course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses)=> this.courses = courses);

  }

  deleteCourse(course: Course){
    this.courseService.deleteCourse(course).subscribe(()=> (this.courses = this.courses.filter(c => c.id !== course.id)));
  }

  addCourse(course: Course){
    this.courseService.addCourse(course).subscribe((course)=> this.courses.push(course));

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
