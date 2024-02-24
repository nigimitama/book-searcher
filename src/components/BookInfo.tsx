import { BookSummary } from './BookSummary'
import { CitationAccordion } from './Citation'
import { Item } from '../@types/SearchResult'

export const BookInfo = (item: Item): JSX.Element => {
  return (
    <div style={{ marginBottom: 10 }}>
      {BookSummary(item)}
      {CitationAccordion(item)}
    </div>
  )
}

