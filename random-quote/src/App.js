import React from "react";

function App() {
  const [quotes, setQuote] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [color, setColor] = React.useState(["#222"]);
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuote(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#1f1f1f",
      "#0d6efd",
      "#0dcaf0",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];
    let randIndex = Math.floor(Math.random() * quotes.length);
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[randIndex]);
    setColor(colors[randColorIndex]);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
      <div className="container  pt-5" id="quote-box">
        <div className=" col-md-8 offset-md-2  p-5 rounded ">
          <div className="card" id="text">
            <div className="card-header text-center bg-secondary"
              style={{ color: color }}> <h2>Random Quotes</h2>
            </div>
            <div className="card-body ">
              {randomQuote ? (
                <>
                  <h2 className="card-text ">&quot;{randomQuote.text}&quot;</h2>
                  <h6 className="card-title text-center pt-2" id="author">
                    <span style={{ color: color }}> {randomQuote.author || "No author"} </span>
                  </h6>
                </>
              ) : (
                <h2>Loading</h2>
              )}

              <div className="row d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <a href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Winning%20isn%E2%80%99t%20everything%2C%20but%20wanting%20to%20win%20is.%22%20Vince%20Lombardi"
                    className="btn btn-secondary mt-2" id="tweet-quote" style={{ color: color }} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter" style={{ color: "#0d6efd" }} aria-hidden="true"></i> Twitter
                  </a>

                  <a className="btn btn-secondary mt-2 " href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Vince%20Lombardi&amp;content=Winning%20isn%E2%80%99t%20everything%2C%20but%20wanting%20to%20win%20is.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
                    style={{ color: color }}>
                    <i className="fa fa-tumblr text-white"></i> Tumblr
                  </a>
                </div>
                <button onClick={getNewQuote} className="btn btn-primary mt-3 "
                  id="new-quote" style={{ backgroundColor: color }} > New Quote
                </button>
              </div>
            </div>
            <div className="card-footer bg-secondary " style={{ color: color }}>By - <cite>Ayman Aly</cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
