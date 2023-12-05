import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from './../../../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() std!: Student;
  @Output() sendDeleteEvent: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  deleteStudent() {
    this.sendDeleteEvent.emit(this.std.id);
  }
}
