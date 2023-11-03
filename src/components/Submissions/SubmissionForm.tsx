'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SubmissionSchema } from '@/models/submissionsModel';
import type { SubmissionFormInput } from '@/models/submissionsModel';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
type Props = {};

const SubmissionForm = (props: Props) => {
  const form = useForm<SubmissionFormInput>({
    resolver: zodResolver(SubmissionSchema),
    defaultValues: {
      company: '',
      position: '',
      location: '',
      workplaceModel: 'remote',
      // websiteUrl: '',
      // submitDate: new Date().toISOString(),
      // notes: '',
    },
  });

  function onSubmit(data: SubmissionFormInput) {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function onError(errors: any) {
    console.log(errors);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="company" {...field} />
                </FormControl>
              </FormItem>
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Input placeholder="position" {...field} />
                </FormControl>
              </FormItem>
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="location" {...field} />
                </FormControl>
              </FormItem>
              <FormItem>
                <RadioGroup
                  defaultValue="remote"
                  className="flex flex-row gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="onsite" id="onsite" />
                    <Label htmlFor="onsite">onsite</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hybrid" id="hybrid" />
                    <Label htmlFor="hybrid">hybrid</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="remote" id="remote" />
                    <Label htmlFor="remote">remote</Label>
                  </div>
                </RadioGroup>
              </FormItem>
            </>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    // <form onSubmit={() => handleSubmit(onSubmit, onError)}>
    //   <input type="text" {...form.register('company')} />
    //   <input type="text" {...form.register('position')} />
    //   <input type="text" {...form.register('location')} />
    //   <input type="text" {...form.register('workplaceModel')} />
    //   {/* <input type="text" {...form.register('websiteUrl')} /> */}
    //   {/* <input type="text" {...form.register('submitDate')} /> */}
    //   {/* <input type="text" {...form.register('notes')} /> */}
    //   <input type="submit">SUBMIT</input>
  );
};

export default SubmissionForm;
