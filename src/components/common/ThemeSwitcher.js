"use client"
import { Switch } from '@mui/material';
import { useTheme } from 'next-themes'
import React from 'react'

export default function ThemeSwitcher() {
    const {theme,setTheme} = useTheme("light");
    const handleChange = () => {
        setTheme(theme=="dark"? "light":"dark");
      };
  return (
    <Switch
      checked={theme=="dark"?true:false}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
