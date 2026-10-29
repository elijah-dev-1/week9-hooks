import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function addTodo() {
    const task = input.trim();

    if (task === '') return;

    const newTodo = {
      id: Date.now(),
      text: task,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <section>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
