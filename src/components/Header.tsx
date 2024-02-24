import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        "backgroundColor": "dimgray",
        "marginBottom": "10px"
      }}
    >
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Book Searcher
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
