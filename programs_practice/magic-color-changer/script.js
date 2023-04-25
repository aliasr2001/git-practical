// Let's grab the required elements 
let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
let blue = document.querySelector('.blue')
let violet = document.querySelector('.violet')
let centerCon = document.querySelector('.disCon')


// Defining the functions
let getBgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}


/* This was the lengthy wave of doing this task. I have optimized the code into a method. So, That's why I have commented this lines of code */

// Adding the Event listeners
// red.addEventListener('mouseenter', () => {
//     centerCon.style.backgroundColor = getBgColor(red);
//     centerCon.style.border = 'none';
//     centerCon.innerHTML = `
//     <h1>${getBgColor(red)}</h1>
//     `
// })

// Wrapping evverting in a method
let magicClrPicker = (color) => {
    color.addEventListener('mouseenter', () => {
        centerCon.style.backgroundColor = getBgColor(color);
        centerCon.style.border = 'none';
        centerCon.innerHTML = `
        <h1>${getBgColor(color)}</h1>
        `
    })
}

// Calling every color with this method {magicClrPicker}
magicClrPicker(red)
magicClrPicker(yellow)
magicClrPicker(blue)
magicClrPicker(green)
magicClrPicker(violet)