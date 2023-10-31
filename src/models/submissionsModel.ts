import mongoose from 'mongoose';

const submissionsSchema = new mongoose.Schema({
  name: String,
  overview: String,
  homepage_url: String,
  number_of_employees: Number,
  created_at: Date,
  updated_at: Date,
});

const SubmissionsModel = mongoose.model(
  'submission',
  submissionsSchema,
  'companies'
);

export default SubmissionsModel;
