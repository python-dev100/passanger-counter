let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let saved = false

function increment() {
    count ++
    countEl.textContent = count
}

function decrement() {
    if (count > 0)
    {
        count --
        countEl.textContent = count
    }
}

function save() {
    let countStr = " - " + count
    if (!saved)
    {
        countStr = count
        saved = true
    }
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
