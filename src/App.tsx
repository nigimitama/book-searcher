import { useState } from 'react'
import { SearchForm } from './components/SearchForm.tsx'

function App() {
  const [query, setQuery] = useState("")

  return (
    <>
      <SearchForm setQuery={setQuery} />
      <p className="read-the-docs">
        {query}
      </p>
    </>
  )
}

export default App
