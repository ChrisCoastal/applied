import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import SubmissionsModel from '@/models/submissionsModel';

export async function GET() {
  try {
    const DB_URL = process.env.MONGODB_URL!;
    await mongoose
      .connect(DB_URL)
      .then(() => console.log('DB connection successful!'))
      .catch((err) => console.log(err));
    const submissions = await SubmissionsModel.findOne({
      name: 'Wetpaint',
    });
    console.log(submissions);
    return NextResponse.json(submissions);
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
