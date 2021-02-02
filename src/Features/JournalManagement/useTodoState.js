import { useState } from 'react';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);
  
  return {
    todos,
    addTodo: todoText => {
      
      todoText = {...todoText,id:Date.now()}
      
      setTodos([...todos, todoText]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((abc) => abc.id !== Number(todoIndex));
      
      setTodos(newTodos);
    }
  };
};

