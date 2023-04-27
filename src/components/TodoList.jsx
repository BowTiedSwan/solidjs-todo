import { createSignal } from 'solid-js';

function TodoList() {
  const [todos, setTodos] = createSignal([]);
  const [newTodo, setNewTodo] = createSignal('');
  const [newDate, setNewDate] = createSignal('');
  const [newTime, setNewTime] = createSignal('');

  function addTodo() {
    if (!newTodo() || !newDate() || !newTime()) {
      return;
    }

    const newTodoItem = {
      text: newTodo(),
      date: newDate(),
      time: newTime(),
    };

    setTodos([...todos(), newTodoItem]);
    setNewTodo('');
    setNewDate('');
    setNewTime('');
  }

  function removeTodo(index) {
    const updatedTodos = todos().filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  function handleNewTodoInput(e) {
    setNewTodo(e.target.value);
  }

  function handleNewDateInput(e) {
    setNewDate(e.target.value);
  }

  function handleNewTimeInput(e) {
    setNewTime(e.target.value);
  }

  return (
    <div class="bg-gray-900 min-h-screen text-white">
      <div class="max-w-md mx-auto p-4">
        <h1 class="text-4xl font-bold mb-4">Todo List</h1>
        <ul class="mb-4">
          {todos().map((todo, index) => (
            <li key={index} class="py-2">
              <div class="flex items-center justify-between">
                <div>
                  <span class="font-bold">{todo.text}</span> - {todo.date} at {todo.time}
                </div>
                <button class="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded" onClick={() => removeTodo(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <div class="flex space-x-2 mb-4">
          <input type="text" value={newTodo()} onInput={handleNewTodoInput} placeholder="Enter a new todo" class="bg-gray-700 text-white py-2 px-4 rounded w-full" />
          <input type="date" value={newDate()} onInput={handleNewDateInput} class="bg-gray-700 text-white py-2 px-4 rounded" />
          <input type="time" value={newTime()} onInput={handleNewTimeInput} class="bg-gray-700 text-white py-2 px-4 rounded" />
          <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded" onClick={addTodo}>Add Todo</button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
