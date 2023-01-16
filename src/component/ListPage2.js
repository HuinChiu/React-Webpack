import { useState } from "react";
import "./styles.css";

export default function App() {
    // need a state to keep track of todos
    const [todos, setTodos] = useState([]);
    // need state to keep track of the value in the input
    const [todo, setTodo] = useState("");

    // function to get the value of the input and set the new state
    function handleInputChange(e) {
        // set the new state value to what's currently in the input box
        setTodo(e.target.value);
        }
    // function to create a new object on form submit
    function handleFormSubmit(e) {
        // prevent the browser default behavior or refreshing the page on submit
        e.preventDefault();

        // don't submit if the input is an empty string
        if (todo !== "") {
        // set the new todos state (the array)
        setTodos([
            // copy the current values in state
            ...todos,
            {
            // setting a basic id to identify the object
            id: todos.length + 1,
            // set a text property to the value of the todo state and 
            // trim the whitespace from the input
            text: todo.trim()
            }
        ]);
        }

        // clear out the input box
        setTodo("");
    }

  return (
    <div className="App">
      {/* create a form element */}
      <form onSubmit={handleFormSubmit}>
        {/* create an input element */}
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          value={todo}
          onChange={handleInputChange}
        />
      </form>

      {/* create a ul to hold all of the list items */}
      <ul className="todo-list">
        {/* map over the todos array which creates a new li element for every todo
        (make sure to add the "key" prop using the unique todo.id value to the li element)
        remember this is an array of objects - so we need to access the property 
        "text" to get the value we want to display */}
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
        }


