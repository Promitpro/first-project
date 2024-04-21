export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

// export type NewUser = {
//   password: string,
//   role: string,
//   id: string
// }

/*
{
    "password": "ami123",
    "student": {
  "name": {
    "firstName": "Mohn",
    "middleName": "Manga",
    "lastName": "Doe"
  },
  "gender": "Male",
  "dateOfBirth": "1990-01-01",
  "email": "mohn.doe@example.com",
  "contactNo": "1234567890",
  "emergencyContactNo": "0987654321",
  "bloodGroup": "A+",
  "presentAddress": "123 Main St, Cityville",
  "permanentAddress": "456 Oak Ave, Townsville",
  "guardian": {
    "fatherName": "James Doe",
    "fatherOccupation": "Engineer",
    "fatherContactNo": "1112223333",
    "motherName": "Mary Doe",
    "motherOccupation": "Teacher",
    "motherContactNo": "4445556666"
  },
  "localGuardian": {
    "name": "Jane Smith",
    "occupation": "Doctor",
    "contactNo": "7778889999",
    "address": "789 Elm St, Villageton"
  },
  "addmissionSemester": "660eacdb9099bdcd5ba57126",
  "academicDepartment": "661801da8962a6d3be520923",
  "profileImg": "https://example.com/profile.jpg"
  
}
}
*/
