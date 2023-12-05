import { Component, OnInit } from '@angular/core';
import { Student } from './../../model/student';
import { STUDENTS } from './../../model/studentMock';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: Student[] = STUDENTS;

  ngOnInit(): void {}

  deleteStudent(stdId: string) {
    this.students = this.students.filter((student) => student.id !== stdId);
  }
}
