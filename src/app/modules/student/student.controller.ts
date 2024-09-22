import { RequestHandler } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utilities/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utilities/catchAsync';

const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();
  // res.status(200).json({
  //   success: true,
  //   message: 'Students are retrived succesfully',
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students are retrived succesfully',
    data: result,
  });

  // res.status(500).json({
  //   success: false,
  //   message: err.message || 'something went wrong',
  //   error: err,
  // });
});
const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrived succesfully',
    data: result,
  });
});
const updateStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateStudentIntoDB(studentId, student);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated successfully',
    data: result,
  });
});
const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});
export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
