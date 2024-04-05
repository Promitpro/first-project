import { z } from 'zod';
import {
  AcademinSemesterCode,
  AcademinSemesterName,
  Months,
} from './academinSemester.constant';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademinSemesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcademinSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});
const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademinSemesterName] as [string, ...string[]]),
    year: z.string().optional(),
    code: z.enum([...AcademinSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});
export const AcademicSemesterValidations = {
  createAcademicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
};
