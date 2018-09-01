// this keeps track of which page we are on
let pageNumber = 0

// content for these pages
const pages = [
    {
        content:"a Queens-based graphic designer", 
        background: "#edc7a9",
        circle: "#3e78ed"
    },
    {
        content:"Kanye West's biggest fan", 
        background: "#a1fffe",
        circle: "#e34a47"
    },
    {
        content:"looking for a job at the end of October", 
        background: "#d3c7f3",
        circle: "#f7fe00"
    },
    {
        content:`letting you <a href="pdf.pdf">download his PDF</a>`, 
        background: "#faffb8",
        circle: "#b472e6"
    },

]

// pick the relevant tags
const nextTag = document.querySelector("footer img.next")
const prevTag = document.querySelector("footer img.prev")
const randomTag =  document.querySelector("footer img.random")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")

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

//goes to random page
const random = function () {
    pageNumber = chance.integer({ min: 0, max: pages.length - 1 })

    updateSection()

}

//Updates content and style according to the page we are on
const updateSection = function ()
{
        outputTag.innerHTML = pages[pageNumber].content
        bodyTag.style.backgroundColor = pages[pageNumber].background
        circleTag.style.backgroundColor = pages[pageNumber].circle
}
// on click of tag, run corresponding function
nextTag.addEventListener("click", next)
prevTag.addEventListener("click", prev)
randomTag.addEventListener("click", random)