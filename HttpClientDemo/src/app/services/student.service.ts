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
}