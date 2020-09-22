const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const counter = document.querySelector('#counter')
const comments = document.querySelector('#list')
const commentForm = document.querySelector('#comment-form')
const heart = document.querySelector('#heart')
const likes = document.querySelector('.likes')

plus.addEventListener("click", incrementCounter)
minus.addEventListener("click", decrementCounter)
commentForm.addEventListener("submit", displayComment)
heart.addEventListener('click', addLike)

function incrementCounter() {
    const currentCount = parseInt(counter.textContent, 10)
    counter.textContent = `${currentCount + 1}`
}

function decrementCounter() {
    const currentCount = parseInt(counter.textContent, 10)
    if (currentCount > 0) {
        counter.textContent = `${currentCount - 1}`
    }
}

function displayComment(event) {
    event.preventDefault() 

    const commentFormData = new FormData(event.target)
    const commentText = commentFormData.get("comment") //name of input; avoids having to query selector 100 values from form individually (e.g. name, address, zip, state, email, etc...)

    const comment = document.createElement("p")
    comment.textContent = commentText
    comments.append(comment)

    event.target.reset()
}

function addLike() {
    const currentCount = parseInt(counter.textContent, 10)

    //alternate const previousLike = document.querySelectorAll(".likes > li")
    const previousLikes = Array.from (likes.children)
    const previousLike = previousLikes.find(previousLike => {
        const previousLikeCount = parseInt(previousLike.textContent.split(" ")[0], 10)
        return previousLikeCount === currentCount
    })
    if (previousLike) {
        const previousHeartsText = previousLike.textContent.split(" ").slice(-2)[0]
        const numberOfHearts = parseInt(previousHeartsText, 10)
        previousLike.textContent = `${currentCount} has been liked ${numberOfHearts + 1} times`
    } else {
        const newLike = document.createElement("li")
        newLike.textContent = `${currentCount} has been liked 1 time`
        likes.append(newLike)
    }
}