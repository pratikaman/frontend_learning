import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {

  const [quotes, setQuotes] = useState([]);

  const handleFormSubmit = (data) => {
    setQuotes([...quotes, data])
  }

  const removeQuote = (id) => {
    setQuotes(
      (prev) => {
        return prev.filter((ele, index)=> index != id)
      }
    )
  }

  return (
    <div className="p-4 pt-10 w-full min-h-screen bg-emerald-600 flex justify-center items-start">
      <div className="w-full">
        <Cards quotes={quotes} handleRemove={removeQuote} />
        <Form handleQuoteSubmit={handleFormSubmit}/>
      </div>
    </div>
  );
}

export default App;
