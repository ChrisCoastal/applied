import { Schema, models, model } from 'mongoose';
import { Submission } from '@/@types';
import z from 'zod';
// create a schema that follows the Submission type
const ObjectWithId = z.object({
  _id: z.string(),
});

const SubmissionDocumentsSchema = z.object({
  resume: z.boolean().default(true),
  coverLetter: z.boolean().default(false),
  screeningQuestions: z.boolean().default(false),
  supportingDocuments: z.boolean().default(false),
  codeChallenge: z.boolean().default(false),
});

const SubmissionNotesSchema = z
  .string()
  .default('')
  .transform((val) => val.split('\n'));

export const SubmissionSchema = z.object({
  company: z.string().min(1),
  position: z.string().min(1),
  location: z.string().min(1),
  workplaceModel: z.enum(['onsite', 'remote', 'hybrid']),
  // contact: z.string().min(1).optional(),
  // documents: SubmissionDocumentsSchema,
  // status: z.enum(['notsubmitted', 'submitted', 'interview', 'offer', 'reject']),
  // notes: SubmissionNotesSchema,
  // qualifications: z.array(z.string()).optional(),
  // websiteUrl: z.string().url().default(''),
  // applicantPortal: z.string().url().optional(),
  // postingLink: z.string().url().optional(),
  // submitDate: z.string().datetime(),
});

export type SubmissionFormParsed = z.infer<typeof SubmissionSchema>;
export type SubmissionFormInput = z.input<typeof SubmissionSchema>;

const SubmissionDbSchema = new Schema<SubmissionFormInput>({
  company: String,
  position: String,
  location: String,
  workplaceModel: String,
  // contact: String,
  // documents: {
  //   resume: Boolean,
  //   coverLetter: Boolean,
  //   screeningQuestions: Boolean,
  //   supportingDocuments: Boolean,
  //   codeChallenge: Boolean,
  // },
  // status: String,
  // qualifications: [String],
  // notes: [String],
  // websiteUrl: String,
  // applicantPortal: String,
  // postingLink: String,
  // submitDate: String,
});

// do not recreate model if it already exists
export const SubmissionModel =
  models?.Submission ?? model('Submission', SubmissionDbSchema, 'submissions');
