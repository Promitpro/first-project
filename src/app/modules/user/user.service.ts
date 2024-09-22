import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  // creat a user object
  const userData: Partial<TUser> = {};
  // if password is not given
  userData.password = password || (config.default_pass as string);
  //   set student role
  userData.role = 'student';

  // find academic semester info
  const addmissionSemester = await AcademicSemester.findById(
    payLoad.addmissionSemester,
  );
  if (!addmissionSemester) {
    throw new Error('Academic semester id is not found');
  }
  // Start a new session for transaction
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    //   set manually generated id
    userData.id = await generateStudentId(addmissionSemester);

    //   create a user (transection - 1)
    const newUser = await User.create([userData], { session });
    //   create a student
    // Object.keys will turn the result into array so with length() we can check is user created
    // if (Object.keys(newUser).length) {
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    // set id, _id as user
    payLoad.id = newUser[0].id;
    payLoad.user = newUser[0]._id; // reference id

    //   create a student (transection - 2)
    const newStudent = await Student.create([payLoad], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create student');
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
