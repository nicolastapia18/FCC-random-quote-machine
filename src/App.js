import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from "react"
import './App.css';

function App() {
  
  const [quoteInfo, setQuoteInfo] = useState({})

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {return response.json()})
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author
        })
      });
  }
  
  return (
    <div className="App">
      <div class="d-flex justify-content-center align-items-center">
        <div id="quote-box">
          <p id="text">{quoteInfo.text}</p>
          <p id="author">{quoteInfo.author}</p>
          <div class="row">
            <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text} target="_blank">Post to Twitter</a>
            <button id="new-quote" onClick={getQuote}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;