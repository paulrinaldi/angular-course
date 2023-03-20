import {Injectable, InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from '../model/course';
import {COURSES} from '../../db-data';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE'); // unique string

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient) {

  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10");
    return this.http.get<Course[]>('/api/courses', {params});
  }

  saveCourse(course: Course) {
    const headers = new HttpHeaders()
      .set("X-Auth", "userId");
    return this.http.put(`/api/courses/${course.id}`, course, {headers});
  }
}
