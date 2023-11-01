'use client';
import { Submission } from '@/@types/types';
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

type Props = {};

const Submissions = (props: Props) => {
  // fetch submissions
  const { data, isLoading, isError } = useQuery({
    queryKey: ['submissions'],
    queryFn: async () => {
      // const res = await fetch('/api/submissions');
      const { data } = await axios.get('/api/submissions');
      console.log(data);
      return data as Submission[];
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div>
      <SubmissionsHeader />
      <ul className="">
        {data
          ? data.map((submission) => (
              <li key={submission._id} className="">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={submission._id}>
                    <AccordionTrigger>
                      <div className="flex flex-row gap-2 mb-2">
                        <div>
                          <div className="h-6 w-6 rounded-full bg-stone-500" />
                        </div>
                        <div className="w-36">{submission.name}</div>
                        <div className="w-56">
                          <Link href={submission.homepage_url}>
                            {truncString(
                              submission.homepage_url.replace(
                                /^(https?:\/\/)/,
                                ''
                              ),
                              24
                            )}
                          </Link>
                        </div>
                        <div>{parseDate(submission.created_at)}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Submissions;
