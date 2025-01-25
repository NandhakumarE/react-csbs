import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoList } from "../utils";

const EachTodo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  useEffect(() => {
    getTodoList(id).then((data) => {
      setTodo(data);
    });
  }, []);

  return <div>{JSON.stringify(todo)}</div>;
};

export default EachTodo;
