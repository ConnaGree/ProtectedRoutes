import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

  const {user} = useSelector((state) => state.user)

  const isCEO = user && user.role === "CEO"

  console.log(user.role)
  return (
    <div>
      <h1>Dashboard</h1>
      <nav className='flex w-full items-center gap-[1rem]'>
        <Link className='mr-[1rem]' to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
        <Link to="/">Home</Link>
        {isCEO && <Link to="allusers">All Users</Link> }
        
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
