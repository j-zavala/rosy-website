// this keeps track of which page we are on
let pageNumber = 0

// content for these pages
const pages = [
    "queens designer", "kanye west", "october", "download my pdf"
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
        outputTag.innerHTML = pages[pageNumber]
}
// on click of tag, run corresponding function
nextTag.addEventListener("click", next)
prevTag.addEventListener("click", prev)