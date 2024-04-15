"use client"
import React from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

export default function BackToTop() {
  if (typeof window !== "undefined") {
    // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  return (
    <div className='flex justify-center items-center fixed w-12 h-12 border-2 border-solid border-[var(--blue)] rounded-[50%] bottom-6 right-6' id='myBtn' onClick={()=> topFunction()}>
        <ArrowUpwardRoundedIcon sx={{color:"var(--blue)"}}/>
    </div>
  )
}
