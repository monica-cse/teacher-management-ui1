// src/types/teacher.d.ts
export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  department: string;
  yearsOfExperience: number;
  qualification: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  rating?: number;
  students?: number;
  status?: 'active' | 'onLeave';
  classes?: string[];
  location?: string;
}