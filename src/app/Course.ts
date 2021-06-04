export interface Course {
    id?: number;
    name: string;
    description: string;
    instructorDescription: string;
    outline: string;
    prerequisites: string;
    lectures: number;
    hours: number;
    quizes: number;
    exercises: number;
    price: string;
    discount: string;
    sEnrolled: number;
    level: string;
    language: string;
    rating: number;
  }