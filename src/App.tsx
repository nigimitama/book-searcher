import { useState } from 'react'
import { SearchForm } from './components/SearchForm.tsx'
import { SearchResult, ResultJson } from './components/SearchResult.tsx'

function App() {
  const defaultResult: ResultJson = {kind: "", items: []}
  const [result, setResult] = useState(defaultResult)

  return (
    <>
      <SearchForm setResult={setResult} />
      <SearchResult result={result} />
    </>
  )
}

export default App
