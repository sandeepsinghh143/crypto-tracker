import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';

export default function PaginationComponent({pageNo,handleChange}) {
  

  return (
    <div className='flex justify-center items-center mb-8'>
      <Pagination count={10} page={pageNo} onChange={(event,value)=>handleChange(event,value)} 
      sx={{
        color: "var(--white)",
        "& .Mui-selected , .Mui-selected:hover": {
          backgroundColor: "var(--blue) !important",
          color: "#fff !important",
          borderColor: "var(--blue) !important",
        },

        "& .MuiPaginationItem-ellipsis": {
          border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
          color: "var(--white)",
          border: "1px solid var(--grey)",
        },
      }}
      />
    </div>
  );
}
