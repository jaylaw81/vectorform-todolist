import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './TodoListItem.css';

function TodoListItem(props) {
  return (
    <li className={props.todo.deleted ? styles.delete_true : styles.li_style}>
      <div className={props.todo.completed ? styles.done_true : '' }>
        <button className="btn btn-link btn-xs" onClick={props.onComplete}>
          <FormattedMessage id="todoToggleStatus" />
        </button>
        <button className="btn btn-link btn-xs" onClick={props.onDelete}>
          <FormattedMessage id="todoDelete" />
        </button>
        {props.todo.text}
      </div>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoListItem;
