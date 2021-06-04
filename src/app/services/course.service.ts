import { Injectable } from '@angular/core';
import {COURSES} from '../mock-courses';
import {Course} from '../Course';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = "http://localhost:5000/courses";

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    // const courses =  of(COURSES);
    // return courses;

    //http client returns observable
    return this.http.get<Course[]>(this.apiUrl);
  }

  deleteCourse(course: Course): Observable<Course> {
    const url = `${this.apiUrl}/${course.id}`;
    return this.http.delete<Course>(url);

  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course, httpOptions);
  }
}