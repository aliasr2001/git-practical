// Initiallizating the Html Tags here and storing them in Variables

let tempLocalTodoList = localStorage.getItem('todoList')
let todoList = !!tempLocalTodoList ? JSON.parse(tempLocalTodoList) : [];

// Targeting root container
let rootContainer = document.getElementById('root')

// TopContainer element working
let topContainer = document.createElement('div')
topContainer.className = 'topContainer';
rootContainer.appendChild(topContainer)

//TopContainer's Heading tag
let headingTxt = document.createElement('h1')
headingTxt.className = 'headingtxt';
headingTxt.innerText = "What's For Today?"
topContainer.appendChild(headingTxt)

// TopContainers's input tag
let inputField = document.createElement('input')
inputField.placeholder = 'Type text to add or search todo'
inputField.className = 'inputField'
// Event listener for Enter key press on the input field
inputField.addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form submission
    addBtn.click(); // Trigger button click event
    }
});
inputField.onkeyup = () => {
    success()
}
topContainer.appendChild(inputField)

// TopContainer's Add button
let addBtn = document.createElement('button')
addBtn.className = 'addBtn';
addBtn.innerText = 'Click OR Smash Enter';
addBtn.disabled = 'true'
addBtn.onclick = () => {
    console.log('clicked')
    addToList();
    addTodoList();
    localStorage.setItem('todoList', JSON.stringify(todoList))
}
topContainer.appendChild(addBtn)


// BottomContainer starts here
let btContainer = document.createElement('div')
btContainer.className = 'bottomContainer';
root.appendChild(btContainer)

//BtContainer's heading text
let btHeadingTxt = document.createElement('h1')
btHeadingTxt.innerText = 'Your ToDos :)';
btHeadingTxt.className = 'btheading'
btContainer.appendChild(btHeadingTxt)

//btContainer's TodoListContainer
let todoListContainer = document.createElement('div')
todoListContainer.className = 'todoListCon'
btContainer.appendChild(todoListContainer)

// Adding the TodoList[] todos to the bottom container 
// todoList.forEach((i) => {
//     let todo = document.createElement('p')
//     todo.innerText = i
//     todo.className = 'btTodos'
//     btContainer.appendChild(todo)
//     })




// Functions are Here


//AddToList Function
const addToList = () => {
    let listItem = inputField.value.trim();
    let listItem2 = listItem.charAt(0).toUpperCase() + listItem.slice(1);

    if(listItem2 !== ""){
        todoList.unshift(listItem2);
        inputField.value = "";
        console.log(todoList)
    }
}

// Check INPUT func
function success() {
    if(inputField.value==="") { 
        addBtn.disabled = true; 
    } else { 
        addBtn.disabled = false;
    }
}

// Adding the TodoList[] todos to the bottom container
const addTodoList = () => {
    let todo = ''
    todoList.forEach((i) => {
        todo += `<p>${i}</p>`
    })
    todoListContainer.innerHTML = todo;
}

addTodoList()