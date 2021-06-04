import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Course} from '../../Course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  @Output() onAddCourse: EventEmitter<Course> = new EventEmitter;
  name!: string;
  description!: string;
    instructorDescription!: string;
    outline!: string;
    prerequisites!: string;
    lectures!: number;
    hours!: number;
    quizes!: number;
    exercises!: number;
    price!: string;
    discount!: string;
    sEnrolled!: number;
  level!: string;
  language!: string;
  rating!: number;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert("Please input course name")
    }

    const newCourse = {
      "name": this.name,
      "description": this.description,
      "instructorDescription": this.instructorDescription,
      "outline": this.outline,
      "prerequisites": this.prerequisites,
      "lectures": this.lectures,
      "hours": this.hours,
      "quizes": this.hours,
      "exercises": this.exercises,
      "price": this.price,
      "discount": this.discount,
      "sEnrolled": this.sEnrolled,
      "level": this.level,
      "language": this.language,
      "rating": this.rating
    };

    this.onAddCourse.emit(newCourse);

    this.name = '';
    this.description = '';
    this.instructorDescription = '';
    this.outline = '';
    this.price = '';
    this.level = '';
    this.language = '';


  }

}
