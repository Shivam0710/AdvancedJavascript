// - Both of these tasks are used for optimizing the performance of webapp
// - This can be done by limiting the rate of function calls


function debounce(fn, delay) {
    let timer;
    return function() {
        let context = this;
        clearTimeout(timer)
        let args = arguments;
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}

function fetchResults(context) {
    console.log("Fetching results " + context)
}

let handleChange = debounce(() => fetchResults("Search"), 500)

// Throttling
function throttle(fn, limit) {
    let flag = true
    return function() {
        let context = this
        let args = arguments
        if(flag) {
            fn.apply(context, args)
            flag = false
            setTimeout(() => {
                flag = true
            }, limit)
        }
    }
}

function getResults() {
    console.log("Getting results .....")
}

let handleResults = throttle(getResults, 1000)