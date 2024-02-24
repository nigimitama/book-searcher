import { Item } from '../@types/SearchResult'
import Cite from 'citation-js'


export const createCite = (item: Item, type: string): string => {
  const csl = convertItemToCSL(item)
  const cite = new Cite(csl)
  return cite.format('bibliography', {
    format: 'text',
    template: type // "apa", 
  }).trim()
}

const convertItemToCSL = (item: Item): Object => {
  // Google Booksは姓名が分かれていないのでこうなる
  const author = (item.volumeInfo.authors || [""]).map(author => {
    return { "given": "", "family": author, "affiliation": [] }
})
  const publishedYear = formatPublishedYear(item)

  return {
    author: author,
    issued: { 'date-parts': [[publishedYear]] },
    title: item.volumeInfo.title,
    publisher: item.volumeInfo.publisher
  }
}


const formatPublishedYear = (item: Item): string => {
  const publishedDate = item.volumeInfo.publishedDate
  const publishedYear = (typeof (publishedDate) === "undefined") ? "" : publishedDate.slice(0, 4)
  return publishedYear
}
