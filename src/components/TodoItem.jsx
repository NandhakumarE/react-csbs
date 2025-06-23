import PropTypes from "prop-types";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
//  props = {id, title, completed}
const TodoItem = (props) => {
  const { title, completed } = props;
  return (
    <div className="todo-item">
      <p className="title">{title}</p>
      <span className="icon">
        {completed ? <CiCircleCheck /> : <FaRegCircle />}
      </span>
    </div>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool
}

export default TodoItem;
