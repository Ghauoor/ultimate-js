// concept of delaying the execution of a function until a certain amount of time has passed

// Three func are required to implement debounce:
// 1- getData(): debounced function
// 2- debounce(): --> getData(), delayer function
// 3- eventListener(): --> debounce(), trigger function

const debounce = (func, wait) => {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func()
        }, wait)
    }
}

function getData() {
    console.log("Getting data from server");
}

const keyPress = debounce(getData, 3000)
