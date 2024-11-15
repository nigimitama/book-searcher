import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <span style={{ fontSize: 18, fontWeight: 600 }}>Book Searcher</span>
      </Toolbar>
    </AppBar>
  )
}
