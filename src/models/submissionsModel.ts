import mongoose from 'mongoose';

const SubmissionsSchema = new mongoose.Schema({
  name: String,
  homepage_url: String,
  number_of_employees: Number,
  created_at: String,
  updated_at: String,
});

// do not recreate model if it already exists
const SubmissionsModel =
  mongoose.models.Submission ??
  mongoose.model('Submission', SubmissionsSchema, 'companies');

export default SubmissionsModel;
