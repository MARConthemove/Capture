
const toggleQuote = () => {
  let quote_javascripts = document.getElementsByClassName("quote-javascript")
  if (quote_javascripts) {
    let quote_contents = document.getElementsByClassName("quote-content")

    for (let quote_javascript of quote_javascripts) {
        console.log(quote_javascript.children[0]);

        quote_javascript.children[1].addEventListener('click', (event) => {
          quote_javascript.children[0].classList.toggle("rotating-quotation-mark")
          quote_javascript.children[1].classList.toggle("quote-overflow-source-card")
          quote_javascript.children[1].children[0].classList.toggle("truncate")
        });
        quote_javascript.children[0].addEventListener('click', (event) => {
          quote_javascript.children[0].classList.toggle("rotating-quotation-mark")

          quote_javascript.children[1].classList.toggle("quote-overflow-source-card")
          quote_javascript.children[1].children[0].classList.toggle("truncate")
        });
    }
  }

}

export {toggleQuote}
