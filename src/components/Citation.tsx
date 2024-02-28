import { Item } from '../@types/SearchResult'
import TextField from '@mui/material/TextField'
import { createCite } from '../modules/citation'
import Stack from '@mui/material/Stack'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { accordionSummaryClasses } from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles';


type CiteTextProps = {
  label: string,
  value: string
}

const CiteText = ({ label, value }: CiteTextProps) => {
  return (
    <TextField
      label={label}
      defaultValue={value}
      InputProps={{ size: "small" }}
      inputProps={{
        style: {
          fontSize: "12px",
          lineHeight: "1.1em",
          padding: "0px",
          margin: "0px"
        }
      }}
      multiline
      fullWidth
    />
  )
}

// 余白を小さくしたcustom component
const SmallAccordionSummary = styled(AccordionSummary)({
  [`&.${accordionSummaryClasses.gutters} .${accordionSummaryClasses.content}`]: {
    margin: "0px",
  },
  [`&.${accordionSummaryClasses.root}`]: {
    minHeight: "1.8em",
    paddingLeft: "5px"
  },
  [`&.${accordionSummaryClasses.expanded}`]: {
    minHeight: "3em",
  },
})

type CitationAccordionProps = {
  item: Item
}

export const CitationAccordion = ({ item }: CitationAccordionProps): JSX.Element => {
  return (
    <Stack direction="row" justifyContent="center" sx={{ width: "100%" }}>
      <Accordion elevation={2} sx={{ width: "95%" }}>
        <SmallAccordionSummary>
          <span style={{ fontSize: "1em", margin: "0px", display: "inline-flex", alignItems: "center" }}>
            <FormatQuoteIcon sx={{ fontSize: "1.2em" }} />
            Citation
          </span>
        </SmallAccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <CiteText label="APA" value={createCite(item, "apa")} />
            <CiteText label="Vancouver" value={createCite(item, "vancouver")} />
            <CiteText label="Harvard" value={createCite(item, "harvard1")} />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}
