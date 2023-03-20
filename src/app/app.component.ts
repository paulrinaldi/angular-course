import {Component, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {CoursesService} from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {
    // console.log(this.coursesService)
    // const params = new HttpParams()
    //   .set("page", "1")
    //   .set("pageSize", "10");
    this.courses$ = this.coursesService.loadCourses(); //this.http.get<Course[]>('/api/courses', {params})
    // .subscribe(courses =>
    // this.courses = courses
    // );
  }

  ngOnInit() {
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(() => {
        console.log('Course Saved!', course);
      });
  }

}
