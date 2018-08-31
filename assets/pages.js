// this keeps track of which page we are on
let pageNumber = 0

// content for these pages
const pages = [
    {
        content:"a Queens-based graphic designer", 
        backgroundColor: "",
        circleColor: ""
    },
    {
        content:"Kanye West biggest fan", 
        backgroundColor: "",
        circleColor: ""
    },
    {
        content:"looking for a job at the end of October", 
        backgroundColor: "",
        circleColor: ""
    },
    {
        content:`letting you <a href="pdf.pdf">download his PDF</a>`, 
        backgroundColor: "",
        circleColor: ""
    },

]

// pick the relevant tags
const nextTag = document.querySelector("footer img.next")
const prevTag = document.querySelector("footer img.prev")
const outputTag = document.querySelector("h2")

//goes to the next page 
const next = function ()
{
	pageNumber = pageNumber + 1

	if (pageNumber > pages.length - 1)
	{
		pageNumber = 0
	}

	updateSection()
}

//goes to previous page
const prev = function ()
{
	pageNumber = pageNumber - 1
	if (pageNumber < 0)
	{
		pageNumber = pages.length - 1
	}

	updateSection()
}

//Updates content and style according to the page we are on
const updateSection = function ()
{
        outputTag.innerHTML = pages[pageNumber].content
}
// on click of tag, run corresponding function
nextTag.addEventListener("click", next)
prevTag.addEventListener("click", prev)