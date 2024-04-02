import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // creat a user object
  const userData: Partial<TUser> = {};
  // if password is not given
  userData.password = password || (config.default_pass as string);
  //   set student role
  userData.role = 'student';
  //   set manually generated id
  userData.id = '2025000001';
  //   create a userData
  const newUser = await User.create(userData);
  //   create a student
  // Object.keys will turn the result into array so with length() we can check is user created
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};
export const UserServices = {
  createStudentIntoDB,
};

// built instance in method
// const student = new Student(studentData);

// if(await student.isUserExists(studentData.id))
// {
//   throw new Error("User already exists");
// }

// const result = await student.save();

//   if password is not given, use default password

//   if (!password) {
//     userData.password = config.default_pass as string;
//   } else {
//     userData.password = password;
//   }
