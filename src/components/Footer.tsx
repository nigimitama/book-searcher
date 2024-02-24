import React from 'react'
import FullscreenIcon from '@mui/icons-material/Fullscreen'


type FooterProps = {
  query: string
}

export const Footer: React.FC<FooterProps> = ({ query }) => {

  const url = (query: string): string => {
    if (query == "") {
      return "https://books.google.com/"
    } else {
      const words = query.split(/\s+/)
      const q = words.join("+")
      return `https://www.google.com/search?tbm=bks&q=${q}`
    }
  }

  return (
    <div>
      <a href={url(query)}>
        <FullscreenIcon />
      </a>
    </div>
  )
}
