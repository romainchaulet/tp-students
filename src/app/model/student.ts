export interface Student {
  id: string;
  name: string;
  email: string;
  dateOfBirth: Date;
  tutor?: {
    firstName: string;
    lastName: string;
  };
  gender: 'Male' | 'Female';
  courseFee: number;
  picture: string;
}
