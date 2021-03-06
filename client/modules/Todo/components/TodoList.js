import React, { PropTypes } from 'react';

// Import Components
import TodoListItem from './TodoListItem/TodoListItem';

function TodoList(props) {
  return (
    <ul>
      {
        props.todos.map(todo => {
          return (
            <TodoListItem
              todo={todo}
              key={todo.cuid}
              onComplete={() => props.handleCompleteTodo(todo.cuid)}
              onDelete={() => props.handleDeleteTodo(todo.cuid)}
            />
          );
        }
      )
      }
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleCompleteTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
