import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Course } from './../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpCliente: HttpClient) {}

  list() {
    return this.httpCliente.get<Course[]>(this.API).pipe(
      first(),
      // delay(2000),
      tap((courses) => console.log(courses))
    );
  }

  save(record: Course) {
    return this.httpCliente.post<Course>(this.API, record).pipe(first());
  }
}
