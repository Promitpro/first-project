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
  "id": "1234567890",
  "password": "sonalibank",
  "name": {
    "firstName": "John",
    "middleName": "",
    "lastName": "Doe"
  },
  "gender": "Male",
  "dateOfBirth": "1990-01-01",
  "email": "john.doe@example.com",
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
  "profileImg": "https://example.com/profile.jpg",
  "isActive": "active"
}
*/
