import { z } from 'zod';

const createUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .regex(/^[A-Z][a-z]*$/, {
      message: '{value} is not in capitalized format',
    }),

  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1)
    .regex(/^[a-zA-Z]+$/, { message: '{value} is not valid' }),
});

const createGuardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

const createLocalGuardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

const creatrStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(30),
    student: z.object({
      name: createUserNameValidationSchema,
      gender: z.enum(['Male', 'Female']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string().min(1),
      emergencyContactNo: z.string().min(1),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().min(1),
      permanentAddress: z.string().min(1),
      guardian: createGuardianValidationSchema,
      localGuardian: createLocalGuardianValidationSchema,
      addmissionSemester: z.string(),
      academicDepartment: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .regex(/^[A-Z][a-z]*$/, {
      message: '{value} is not in capitalized format',
    })
    .optional(),

  middleName: z.string().optional(),

  lastName: z
    .string()
    .min(1)
    .regex(/^[a-zA-Z]+$/, { message: '{value} is not valid' })
    .optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().min(1).optional(),
  fatherOccupation: z.string().min(1).optional(),
  fatherContactNo: z.string().min(1).optional(),
  motherName: z.string().min(1).optional(),
  motherOccupation: z.string().min(1).optional(),
  motherContactNo: z.string().min(1).optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().min(1).optional(),
  occupation: z.string().min(1).optional(),
  contactNo: z.string().min(1).optional(),
  address: z.string().min(1).optional(),
});

const updateStudentValidationSchema = z.object({
  body: z
    .object({
      password: z.string().max(30).optional(),
      student: z
        .object({
          name: updateUserNameValidationSchema.optional(),
          gender: z.enum(['Male', 'Female']).optional(),
          dateOfBirth: z.string().optional(),
          email: z.string().email().optional(),
          contactNo: z.string().min(1).optional(),
          emergencyContactNo: z.string().min(1).optional(),
          bloodGroup: z
            .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
            .optional(),
          presentAddress: z.string().min(1).optional(),
          permanentAddress: z.string().min(1).optional(),
          guardian: updateGuardianValidationSchema.optional(),
          localGuardian: updateLocalGuardianValidationSchema.optional(),
          addmissionSemester: z.string().optional(),
          academicDepartment: z.string().optional(),
          profileImg: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
});

export const studentValidations = {
  creatrStudentValidationSchema,
  updateStudentValidationSchema,
};
