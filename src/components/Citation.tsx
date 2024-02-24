import { Item } from '../@types/SearchResult'
import TextField from '@mui/material/TextField'
import { createCite } from '../modules/citation'
import Stack from '@mui/material/Stack'


type CiteTextProps = {
  label: string,
  value: string
}

const CiteText = ({ label, value }: CiteTextProps) => {
  return (
    <TextField
      label={label}
      defaultValue={value}
      InputProps={{size: "small"}}
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



export const Citation = (item: Item): JSX.Element => {

  return (
    <Stack spacing={2}>
      <CiteText label="APA" value={createCite(item, "apa")} />
      <CiteText label="Vancouver" value={createCite(item, "vancouver")} />
      <CiteText label="Harvard" value={createCite(item, "harvard1")} />
    </Stack>
  )
}
