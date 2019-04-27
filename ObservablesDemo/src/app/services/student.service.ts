import { Student } from './student.model';
import { Observable, of } from 'rxjs';

export class StudentService {

    studentList : Student[]= [
        new Student(27,"keyur"),
        new Student(26,"denish"),
        new Student(44,"vinit")
    ];

    getStudentList(): Student[]{
        return this.studentList;
    }

    getStudentListObservable(): Observable<Student[]>{
        return of(this.studentList);
    }
}