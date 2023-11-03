import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import SubmissionForm from './SubmissionForm';

type Props = {};

const AddSubmission = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger>Add</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Job Application</DialogTitle>
          <DialogDescription>This is adding a job.</DialogDescription>
        </DialogHeader>
        <SubmissionForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddSubmission;
