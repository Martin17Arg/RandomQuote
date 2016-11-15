$(document).ready() {

    function parseQuote(response)
		{
			document.getElementById("quote").innerHTML = response.quoteText;
			document.getElementById("author").innerHTML = response.quoteAuthor;
		}

    
};
