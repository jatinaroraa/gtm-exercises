import React from 'react'
import {Box, Typography} from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  return (
    <Box>
        <Typography textAlign='center' fontFamily='bold' borderTop={1} sx={{pb: 5, pt: 2}} ><CopyrightIcon/>Designed By Jatin Arora </Typography>
    </Box>
  )
}

export default Footer