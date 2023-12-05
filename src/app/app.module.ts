import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterStudentComponent } from './components/students/register-student/register-student.component';
import { StudentComponent } from './components/students/student/student.component';
import { NamePrefixPipe } from './pipes/name-prefix.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './components/students/students.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  declarations: [
    AppComponent,
    StudentsComponent,
    RegisterStudentComponent,
    StudentComponent,
    NamePrefixPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
