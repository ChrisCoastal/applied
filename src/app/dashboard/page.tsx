import Submissions from '@/components/Submissions/Submissions';
import Sidebar from '@/components/Sidebar/Sidebar';
import React from 'react';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="flex flex-row m-auto max-w-7xl gap-8">
      <Sidebar />
      <Submissions />
    </div>
  );
};

export default Dashboard;
