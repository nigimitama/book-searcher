import { useState, FC } from 'react'
import { SearchForm } from './components/SearchForm.tsx'
import { SearchResult, ResultJson } from './components/SearchResult.tsx'

const App: FC = () => {
  const defaultResult: ResultJson = { kind: "", items: [] }
  const [result, setResult] = useState(defaultResult)

  return (
    <>
      <SearchForm setResult={setResult} />
      <SearchResult result={result} />
    </>
  )
}

export default App
