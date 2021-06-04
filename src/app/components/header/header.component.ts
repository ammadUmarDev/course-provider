import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Course Provider';
  
  //runs when component is initialized
  constructor() { }

  //use to make request on initialize
  ngOnInit(): void {
  }

  toggleAddCourse(){
    console.log("Course Added");
  }

}
