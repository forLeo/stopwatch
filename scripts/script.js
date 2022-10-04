/* Test if script is starting */

console.log("script.js just started")

/* Define variables */

let time = 0
let rounded = 0

let btnStart = false
let btnStop = false
let btnReset = false

/* Starting function updateTime every 0.01 sec */

let intervalID = window.setInterval(updateTime, 10);

/* Define lots of different functions */

/* Is activated by the start button*/
/* Sending log that stopwatch started */
/* Setting start to true so the timer starts counting */

function startStopwatch() {
    console.log("Stopwatch just started")
    btnReset = false
    btnStop = false
    btnStart = true
}

/* Is stoping the time by pausing the function that adds */
/* The time when start is true*/

function stopStopwatch() {
    console.log("Stopwatch just stoped")
    btnReset = false
    btnStart = false
    btnStop = true
}

/* Setting time to 0 */

function resetStopwatch() {
    console.log("Stopwatch just reseted")
    time = 0
    btnStop = false
    btnStart = false
    btnReset = true
}

/* Is adding 0.01 sec to the time every 0.01 sec */

function startTime() {
    if (btnStart == true)
    {
        time = time + 0.01
    }
}

/* Is styling the button when clicked and when not clicked */
function styleButton() {

    /* btn 1 */

    if (btnStart == true)
    {
        document.getElementById("btn0").style.backgroundColor = "#e2ba63"
        document.getElementById("btn0").style.border = "solid 0.5vmin #b69b69"
    }
    if (btnStart !== true)
    {
        document.getElementById("btn0").style.removeProperty("background-color")
        document.getElementById("btn0").style.removeProperty("border")
    }

    /* btn 2 */

    if (btnStop == true)
    {
        document.getElementById("btn1").style.backgroundColor = "#e2ba63"
        document.getElementById("btn1").style.border = "solid 0.5vmin #b69b69"
    }
    if (btnStop !== true)
    {
        document.getElementById("btn1").style.removeProperty("background-color")
        document.getElementById("btn1").style.removeProperty("border")
    }

    /* btn 3 */

    if (btnReset == true)
    {
        document.getElementById("btn2").style.backgroundColor = "#e2ba63"
        document.getElementById("btn2").style.border = "solid 0.5vmin #b69b69"
    }
    if (btnReset !== true)
    {
        document.getElementById("btn2").style.removeProperty("background-color")
        document.getElementById("btn2").style.removeProperty("border")
    }
}

/* Is rounding the time to only 2 decimals */
/* Sending a log that the time got rounded */
/* Editing timer text to the newest time */
/* Refering to startTime */

function updateTime() {
    rounded = time.toFixed(2)
    console.log(rounded)
    document.getElementById("timer").innerHTML = rounded + "s";
    startTime()
    styleButton()
}