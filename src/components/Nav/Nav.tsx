import React from 'react';

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className="bg-stone-500/10 ">
      <div className="max-w-7xl justify-between m-auto h-16 flex flex-row items-center">
        <div className="h-12 w-12 bg-stone-500 rounded-full" />
        <div className="flex flex-row gap-4">
          <div className="text-stone-500">Home</div>
          <div className="text-stone-500">About</div>
          <div className="text-stone-500">Contact</div>
          <div className="text-stone-500">Login</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
