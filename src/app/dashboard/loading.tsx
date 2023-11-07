import React from 'react';

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <span className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></span>
    </div>
  );
};

export default Loading;
