'use client';
import { Submission } from '@/@types';
import { useQuery } from '@tanstack/react-query';
import SubmissionsHeader from '@/components/Submissions/SubmissionsHeader';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import axios from 'axios';
import React from 'react';
import { parseDate, truncString } from '@/lib/utils';
import Link from 'next/link';
import AddSubmission from './AddSubmission';
import { SubmissionFormInput } from '@/models/submissionsModel';

type Props = {};

const Submissions = (props: Props) => {
  // fetch submissions
  const { data, isLoading, isError } = useQuery({
    queryKey: ['submissions'],
    queryFn: async () => {
      // const res = await fetch('/api/submissions');
      const { data } = await axios.get('/api/submissions');
      console.log(data);
      return data as SubmissionFormInput[];
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="w-full">
      <AddSubmission />
      <SubmissionsHeader />
      <ul className="">
        {data ? (
          <Accordion type="single" collapsible className="w-full">
            {data.map((submission) => (
              <li key={submission.company} className="">
                <AccordionItem value={submission.company}>
                  <AccordionTrigger>
                    <div className="flex flex-row gap-2 mb-2">
                      <div>
                        <div className="h-6 w-6 rounded-full bg-stone-500" />
                      </div>
                      <div className="w-36">{submission.company}</div>
                      <div className="w-56">
                        {/* {submission?.websiteUrl && (
                          <Link href={submission.websiteUrl}>
                            {truncString(
                              submission.websiteUrl.replace(
                                /^(https?:\/\/)/,
                                ''
                              ),
                              24
                            )}
                          </Link>
                        )} */}
                      </div>
                      <div>{submission.position}</div>
                      <div>{submission.location}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    This is the details about the submission.
                  </AccordionContent>
                </AccordionItem>
              </li>
            ))}
          </Accordion>
        ) : null}
      </ul>
    </div>
  );
};

export default Submissions;
