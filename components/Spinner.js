import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';



function Spinner() {
  return (
    <>
      <CircularProgress 
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        color='inherit'
        sx={{color:'white'}}
      />
    </>
  )
}

export default Spinner
