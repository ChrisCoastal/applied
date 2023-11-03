'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SubmissionSchema } from '@/models/submissionsModel';
import type { SubmissionFormValue } from '@/models/submissionsModel';
import { Form } from '../ui/form';
type Props = {};

const SubmissionForm = (props: Props) => {
  const form = useForm<SubmissionFormValue>({
    resolver: zodResolver(SubmissionSchema),
    defaultValues: {
      company: '',
      websiteUrl: '',
      submitDate: new Date().toISOString(),
      notes: '',
    },
  });

  return <div>SubmissionForm</div>;
};

export default SubmissionForm;
