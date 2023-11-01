import Submissions from '@/components/Submissions/Submissions';
import Sidebar from '@/components/Sidebar/Sidebar';
import React from 'react';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="m-auto max-w-7xl">
      <div className="flex flex-row  gap-12">
        <Submissions />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
