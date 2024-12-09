import { useContext, createContext } from "react";

// Here we created the context with some paras
export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Hello World',
            completed: false
        }
    ],
    addTodo: (todoMsg) => {},
    removeTodo: (id) => {},
    updateTodo: (todoMsg, id) => {},
    toggleComplete: (id) => {}
})

// Here we intiallized with Context Provider
export const TodoProvider = todoContext.Provider

export const useTodo = () => {
    return useContext(todoContext)
}
