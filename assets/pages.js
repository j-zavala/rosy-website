// this keeps track of which page we are on
let pageNumber = 0;

// pick the relevant tags
const nextTag = document.querySelector("footer img.next")
const prevTag = document.querySelector("footer img.prev")
const outputTag = document.querySelector("h2")

//goes to the next page 
const next = function ()
{
	pageNumber = pageNumber + 1

	if (pageNumber > 10)
	{
		pageNumber = 1
	}

	updateSection()
}

//goes to previous page
const prev = function ()
{
	pageNumber = pageNumber - 1
	if (pageNumber < 1)
	{
		pageNumber = 10
	}

	updateSection()
}

//Updates content and style according to the page we are on
const updateSection = function ()
{
	outputTag.innerHTML = pageNumber
}
// on click of tag, run corresponding function
nextTag.addEventListener("click", next)
prevTag.addEventListener("click", prev)