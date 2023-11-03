export interface Submission {
  _id: string;
  company: string;
  position: string;
  contact?: string;
  documents: {
    resume: boolean;
    cover_letter: boolean;
    screening: boolean;
    support_docs: boolean;
    code_challenge: boolean;
  };
  status: 'notsubmit' | 'submit' | 'interview' | 'offer' | 'reject';
  qualifications: string[];
  notes: string[];
  application_date: string;
  website_url: string;
  applicant_portal: string;
  posting_link: string;
  location: {
    city: string;
    type: 'onsite' | 'remote' | 'hybrid';
  };
  created_at: string;
  updated_at: string;
}
