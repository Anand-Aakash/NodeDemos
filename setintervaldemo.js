console.log('start')
const id = setInterval(() => {
    console.log('Hello....')
}, 1000)
setTimeout(() => {
    clearInterval(id)
    console.log('setInterval callback function is stopped after 2 seconds')
}, 6000)
console.log('End')