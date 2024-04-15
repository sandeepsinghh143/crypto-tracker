import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
      <CircularProgress />
    </div>
  );
}