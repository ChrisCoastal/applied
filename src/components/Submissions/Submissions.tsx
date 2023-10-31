'use client';
import { Submission } from '@/@types/types';
import { useQuery } from '@tanstack/react-query';
import SubmissionsHeader from '@/components/Submissions/SubmissionsHeader';
import axios from 'axios';
import React from 'react';

type Props = {};

const Submissions = (props: Props) => {
  // fetch submissions
  const { data, isLoading, isError } = useQuery({
    queryKey: ['submissions'],
    queryFn: async () => {
      // const res = await fetch('/api/submissions');
      const { data } = await axios.get('/api/submissions');
      console.log(data);
      return data as Submission;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div>
      Submissions
      <div>{data ? data.name : null}</div>
      <SubmissionsHeader />
    </div>
  );
};

export default Submissions;
