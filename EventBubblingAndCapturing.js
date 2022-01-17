//  Event Capturing is also known as event trickling

// In event bubbling the event propagates from child to the parent div and in the event capturing the event propagates in opposite direction.

let child = document.querySelector('.child')
let parent = document.querySelector('.parent')
let grandParent = document.querySelector('.grandParent')

let useCapture = false

child.addEventListener('click', () => {
    console.log("CLICK CHILD")
}, useCapture)

parent.addEventListener('click', () => {
    console.log("CLICK parent")
}, useCapture)

grandParent.addEventListener('click', () => {
    console.log("CLICK grandParent")
}, useCapture)