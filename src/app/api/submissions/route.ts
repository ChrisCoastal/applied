import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import SubmissionModel from '@/models/submissionsModel';
import { Submission } from '@/@types';

export async function GET() {
  try {
    const DB_URL = process.env.MONGODB_URL;
    if (!DB_URL) throw new Error('DB_URL is not defined');

    await mongoose
      .connect(DB_URL)
      .then(() => console.log('DB connection successful!'))
      .catch((err) => console.log(err));

    const submissions = await SubmissionModel.find({
      // name: 'Wetpaint',
    }).limit(10);
    console.log(submissions);
    return NextResponse.json(submissions as Submission[]);
    // const DB_URL = process.env.MONGODB_URL;
    // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // const data = await res.json();
    // console.log(data);
    // return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}

export async function POST(submission: Submission) {
  try {
    const DB_URL = process.env.MONGODB_URL;
    if (!DB_URL) throw new Error('DB_URL is not defined');

    const newSubmission = new SubmissionModel(submission);

    await mongoose
      .connect(DB_URL)
      .then(() => console.log('DB connection successful!'))
      .catch((err) => console.log(err));

    const submissions = await SubmissionModel.find({
      // name: 'Wetpaint',
    }).limit(10);
    console.log(submissions);
    return NextResponse.json(submissions);
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
