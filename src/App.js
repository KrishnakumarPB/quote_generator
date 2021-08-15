import Quote from "./Quote"
import './App.css';
import QuoteData from "./QuoteData";
import "./style.css"

function App() {  
  const QuoteComponent=QuoteData.map(quoted => <Quote id={quoted.id} imgurl={quoted.imgurl} quote={quoted.quote} quoter={quoted.quoter}/>)
  console.log(QuoteComponent);
  return (
    <div>
      <div className="title">Quote Center</div>
    <div className="quote">
      {QuoteComponent} 
    </div>
    </div>
  );
}

export default App;
