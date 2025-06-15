import { Item } from "../@types/SearchResult"
import TextField from "@mui/material/TextField"
import { citeFileUrl, createCite } from "../modules/citation"
import Stack from "@mui/material/Stack"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { accordionSummaryClasses } from "@mui/material/AccordionSummary"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import DownloadIcon from "@mui/icons-material/Download"

type CiteTextProps = { label: string; value: string }

const CiteText = ({ label, value }: CiteTextProps) => {
  return (
    <TextField
      label={label}
      defaultValue={value}
      InputProps={{ size: "small" }}
      inputProps={{ style: { fontSize: "12px", lineHeight: "1.1em", padding: "0px", margin: "0px" } }}
      fullWidth
      // NOTE: multiline={true} で rowsが未指定だと無限に再レンダリングするバグがある
      multiline
      rows={2}
    />
  )
}

type citeFileButtonProps = { innerText: string; bookId: string; citeFileType: string }

const CiteFileButton = ({ innerText, bookId, citeFileType }: citeFileButtonProps): React.JSX.Element => {
  return (
    <Button
      href={citeFileUrl(bookId, citeFileType)}
      variant="outlined"
      size="small"
      sx={{ fontSize: "11px", paddingTop: "2px", paddingBottom: "2px", textTransform: "none" }}
      startIcon={<DownloadIcon />}
    >
      {innerText}
    </Button>
  )
}

// 余白を小さくしたcustom component
const SmallAccordionSummary = styled(AccordionSummary)({
  [`&.${accordionSummaryClasses.gutters} .${accordionSummaryClasses.content}`]: { margin: "0px" },
  [`&.${accordionSummaryClasses.root}`]: { minHeight: "1.8em", paddingLeft: "5px" },
  [`&.${accordionSummaryClasses.expanded}`]: { minHeight: "3em" },
})

type CitationAccordionProps = { item: Item }

export const CitationAccordion = ({ item }: CitationAccordionProps): React.JSX.Element => {
  return (
    <Stack direction="row" justifyContent="center" sx={{ width: "100%" }}>
      <Accordion elevation={2} sx={{ width: "95%" }}>
        <SmallAccordionSummary>
          <span style={{ fontSize: "0.85em", margin: "0px", display: "inline-flex", alignItems: "center" }}>
            <FormatQuoteIcon sx={{ fontSize: "1.2em" }} />
            Citation
          </span>
        </SmallAccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <CiteText label="APA" value={createCite(item, "apa")} />
            <CiteText label="Vancouver" value={createCite(item, "vancouver")} />
            <CiteText label="Harvard" value={createCite(item, "harvard1")} />

            <Stack direction="row" spacing={1}>
              <CiteFileButton innerText="BibTeX" bookId={item.id} citeFileType="bibtex" />
              <CiteFileButton innerText="EndNote" bookId={item.id} citeFileType="enw" />
              <CiteFileButton innerText="RefMan" bookId={item.id} citeFileType="ris" />
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}
