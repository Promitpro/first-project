import { RequestHandler } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utilities/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utilities/catchAsync';

// RequestHandler defines the type of req, res, next
const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  const result = await UserServices.createStudentIntoDB(password, studentData);
  // res.status(200).json({
  //   success: true,
  //   message: 'Student is created succesfully',
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});
export const UserControllers = {
  createStudent,
};

// creating a schema validation using joi
// const { error,value} = studentValidationSchema.validate(studentData);
// if(error)
// {
//   res.status(500).json({
//     success: false,
//     message: 'something went wrong',
//     error,
//   });
// }

// creating a schema validation using zod
