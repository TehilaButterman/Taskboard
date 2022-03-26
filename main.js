let tasksList = [];

// onload - show the last notes, if there are old tasks
function displayTasks() {
    if (JSON.parse(localStorage.getItem("tasksList")) !== null) {
        tasksList = (JSON.parse(localStorage.getItem("tasksList")))
        buildDisplay()
    }
}
// this function push the values inside an array, send them to localstorage, and display them as cards of tasks
function addToArray() {
    let myTask = {
        task: newTaskAdded.value,
        date: deadLineDate.value,
        hour: deadLineHour.value
    }
    tasksList.push(myTask)
    sendValuesToStorage()
    buildDisplay()
}
// send values to localstorage
function sendValuesToStorage() {
    localStorage.setItem("tasksList", JSON.stringify(tasksList))
}

// create the notes
function buildDisplay() {
    display.innerHTML = ""
    tasksList.forEach((item, i) => {
        display.innerHTML +=
            `<div class="wrapper">
        <div class = "scrollspy-example">
        <h6>My Task:</h6> 
        <p>${item.task}</p>
        <p class = "myDeadLine">${item.date},${item.hour}</p>
 <button type = "button" class="btn btn-outline-danger" onclick="delItem(${i})"><i class="bi bi-trash3"></i></button>
 </div>    
 </div>
 `
    })
    reset()
}

// delete a specific task from the list, from the localstorage, and from the page
function delItem(i) {
    JSON.parse(localStorage.getItem("tasksList"))
    tasksList.splice(i, 1)
    localStorage.setItem("tasksList", JSON.stringify(tasksList))
    buildDisplay()
}

// validation, if all the fileds were filled, create the note.
function createANewNote() {
    if (newTaskAdded.value !== "" && deadLineDate.value !== "" && deadLineHour.value !== "") {
        addToArray()
    } else {
        alert("Please fill in all the inputs")
    }
}
// clear the fileds
function reset() {
    newTaskAdded.value = ''
    deadLineDate.value = ''
    deadLineHour.value = ''
}