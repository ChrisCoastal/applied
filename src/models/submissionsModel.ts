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

const SubmissionLocationSchema = z.object({
  city: z.string().min(1),
  type: z.enum(['onsite', 'remote', 'hybrid']),
});

export const SubmissionSchema = ObjectWithId.extend({
  company: z.string().min(1),
  position: z.string().min(1),
  location: SubmissionLocationSchema,
  contact: z.string().min(1).optional(),
  documents: SubmissionDocumentsSchema,
  status: z.enum(['notsubmitted', 'submitted', 'interview', 'offer', 'reject']),
  notes: z
    .string()
    .default('')
    .transform((val) => val.split('\n')),
  qualifications: z.array(z.string()).optional(),
  websiteUrl: z.string().url().default(''),
  applicantPortal: z.string().url().optional(),
  postingLink: z.string().url().optional(),
  submitDate: z.string().datetime(),
});

export type SubmissionFormParsed = z.infer<typeof SubmissionSchema>;
export type SubmissionFormValue = z.input<typeof SubmissionSchema>;

const SubmissionDbSchema = new Schema<SubmissionFormValue>({
  company: String,
  position: String,
  contact: String,
  documents: {
    resume: Boolean,
    coverLetter: Boolean,
    screeningQuestions: Boolean,
    supportingDocuments: Boolean,
    codeChallenge: Boolean,
  },
  status: String,
  qualifications: [String],
  notes: [String],
  websiteUrl: String,
  applicantPortal: String,
  postingLink: String,
  location: {
    city: String,
    type: String,
  },
  submitDate: String,
});

// do not recreate model if it already exists
const SubmissionModel =
  models.Submission ?? model('Submission', SubmissionDbSchema, 'companies');

export default SubmissionModel;
