import React from 'react'
import { Book } from './Book'
import { Citation } from './Citation'
import { Item, ResultJson } from '../@types/SearchResult'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


import { accordionSummaryClasses } from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles';

// 余白を小さくしたcustom component
const SmallAccordionSummary = styled(AccordionSummary)({
  [`&.${accordionSummaryClasses.gutters} .${accordionSummaryClasses.content}`]: {
    margin: 0,
  },
  [`&.${accordionSummaryClasses.root}`]: {
    minHeight: "1.8em",
  },
  [`&.${accordionSummaryClasses.expanded}`]: {
    minHeight: "3em",
  },
})


const BookInfo = (item: Item): JSX.Element => {
  return (
    <div style={{ marginBottom: 10 }}>
      {Book(item)}
      <Stack direction="row" justifyContent="center" sx={{ width: "100%" }}>
        <Accordion sx={{ width: "95%" }}>
          <SmallAccordionSummary>
            <span style={{ fontSize: "1em", margin: "0px" }}>
              <FormatQuoteIcon sx={{ fontSize: "1em" }} />
              Citation
            </span>
          </SmallAccordionSummary>
          <AccordionDetails>
            {Citation(item)}
          </AccordionDetails>
        </Accordion>
      </Stack>
    </div>
  )
}


type SearchResultProps = {
  result: ResultJson
}

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {

  const BookInfoItems = (result: ResultJson): JSX.Element[] => {
    if (Object.entries(result.items).length == 0) return [<></>]

    const items: JSX.Element[] = []
    result.items.forEach(item => {
      items.push(<Divider />)
      items.push(BookInfo(item))
    })
    // items.pop() // 最後のDividerだけ消す
    return items
  }

  return (
    <>
      <List>{BookInfoItems(result)}</List>
    </>
  )
}