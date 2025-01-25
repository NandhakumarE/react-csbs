import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useNavigate } from "react-router-dom";
import { getTodoList } from "../utils";

function TodoList() {
  const [list, setList] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    getTodoList(id).then((data) => {
      setList(data);
    });
  }, [id]);

  const navigate = useNavigate();

  const onSearchChange = (event) => {
    const value = event.target.value;
    setId(value);
  };

  const onButtonClick = (id) => {
    navigate(`/tasks/${id}`);
  };
  return (
    <div className="app">
      <div className="search-container">
        <label htmlFor="search">Search</label>
        <input
          type="number"
          min={1}
          max={200}
          id="search"
          value={id}
          onChange={onSearchChange}
        />
      </div>
      <ul className="list">
        {list.map((eachTodoItem) => (
          <li key={eachTodoItem.id}>
            <button onClick={() => onButtonClick(eachTodoItem.id)}>
              <TodoItem
                id={eachTodoItem.id}
                title={eachTodoItem.title}
                completed={eachTodoItem.completed}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
