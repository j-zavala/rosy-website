let pageNumber = 0;

const nextTag = document.querySelector("footer img.next")
const prevTag = document.querySelector("footer img.prev")
const outputTag = document.querySelector("h2")

//goes to the next page 
const next = function() {
    pageNumber = pageNumber + 1

    if (pageNumber > 10) {
        pageNumber = 1
    }

    updateSection()
}

//goes to previous page
const prev = function() {
    pageNumber = pageNumber - 1
    if (pageNumber < 1) {
        pageNumber = 10
    }

//Changes content to its assigned page
    updateSection()
}

const updateSection = function() {
    outputTag.innerHTML = pageNumber
}

nextTag.addEventListener("click", next)
prevTag.addEventListener("click", prev)