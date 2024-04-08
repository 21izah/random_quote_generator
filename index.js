const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quotes");
const authorEl = document.getElementById("author");

const url = "https://api.quotable.io/random";

async function getQuote() {
  try {
    quoteEl.innerText = "Loading....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading....";
    authorEl.innerText = "Loading....";
    const response = await fetch(url, {
      method: "GET",
      // headers: headers,
    });
    if (!response) {
      throw new Error("Request failed");
    }

    const quote = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "GET A QUOTE";
    console.log(quote);
    quoteEl.innerText = quote.content;
    authorEl.innerText = quote.author;
  } catch (error) {
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.error("Error", error);
  }
}

btnEl.addEventListener("click", getQuote);
