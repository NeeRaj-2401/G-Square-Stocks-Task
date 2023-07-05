import { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  // const [count, setCount] = useState(0)
  const baseUrl = "https://api.twelvedata.com";
  const apiKey = "1a62b7ecf1ae4e44935a2bfe3b60b985";

  return (
    <>
      <SearchBar baseUrl={baseUrl} apiKey={apiKey}/>
    </>
  )
}

export default App
