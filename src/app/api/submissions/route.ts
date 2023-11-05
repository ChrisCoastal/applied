'use server';

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { SubmissionModel, SubmissionSchema } from '@/models/submissionsModel';
import { Submission } from '@/@types';

function constructDbUrl(collection: string, query: string = '') {
  const { MONGODB_URL, MONGODB_QUERY_BASE } = process.env;
  if (!MONGODB_URL || !MONGODB_QUERY_BASE)
    throw new Error('DB_URL is not defined');

  return MONGODB_URL + collection + MONGODB_QUERY_BASE;
}

export async function GET() {
  try {
    const DB_URL = constructDbUrl('submissions');

    await mongoose
      .connect(DB_URL)
      .then(() => console.log('DB connection successful!'))
      .catch((err) => console.log(err));

    const submissions = await SubmissionModel.find({
      company: '',
    }).limit(10);
    return NextResponse.json(submissions as Submission[]);
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}

export async function POST(req: Request) {
  try {
    const DB_URL = constructDbUrl('submissions');
    const body = await req.json();
    const parsedBody = SubmissionSchema.parse(body);
    const newSubmission = new SubmissionModel(parsedBody);

    await newSubmission.save();

    return NextResponse.json(newSubmission);
  } catch (err) {
    console.error('There was an error while writing to the db', err);
    return NextResponse.error();
  }
}
