import { useState, FC } from 'react'
import { SearchForm } from './components/SearchForm.tsx'
import { SearchResult } from './components/SearchResult.tsx'
import { Footer } from './components/Footer.tsx'
import { ResultJson } from './@types/SearchResult'

const App: FC = () => {
  const defaultResult: ResultJson = { kind: "", items: [] }
  const [result, setResult] = useState(defaultResult)
  const [query, setQuery] = useState("")

  return (
    <>
      <SearchForm setQuery={setQuery} setResult={setResult} />
      <SearchResult result={result} />
      <hr/>
      <Footer query={query} />
    </>
  )
}

export default App
