import Quote from "./Quote"
import './App.css';
import QuoteData from "./QuoteData";
import "./style.css"

function App() {
  const QuoteComponent=QuoteData.map(quoted => <Quote id={quoted.id} imgurl={quoted.imgurl} quote={quoted.quote} quoter={quoted.quoter}/>)
  console.log(QuoteComponent);
  return (
    <div className="quote">
      {QuoteComponent} 
    </div>
  );
}

export default App;
