import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable()
export class StudentService {


    apppURL : string = 'http://localhost:3000/student';

    constructor(private httpClient : HttpClient){}

    getStudentList():Observable<Student[]>{
        return this.httpClient.get<Student[]>(this.apppURL);
    }

    save(student : Student): Observable<Student> {
        return this.httpClient.post<Student>(this.apppURL,student);
    }

    update(student : Student): Observable<Student> {
        return this.httpClient.put<Student>(this.apppURL+"/"+student.id,student);
    }

    getStudentById(id: number): Observable<Student> {
        return this.httpClient.get<Student>(this.apppURL+"/"+id);
    }

    deleteStudentById(id: number): Observable<number> {
        return this.httpClient.delete<number>(this.apppURL+"/"+id);
    }

}