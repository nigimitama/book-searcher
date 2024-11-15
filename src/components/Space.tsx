import React from "react"
import { Box } from "@mui/material"

type SpaceProps = {
  height: string
}

export const Space = ({ height = "10px" }: SpaceProps): React.JSX.Element => {
  return (
    <Box
      sx={{
        width: "100%",
        height: height,
        bgcolor: "transparent",
      }}
    />
  )
}
