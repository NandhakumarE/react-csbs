import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./page/About";
import ContactUs from "./page/ContactUs";
import Home from "./page/Home";
import TodoList from "./components/TodoList";
import ErrorPage from "./assets/ErrorPage";
import EachTodo from "./page/EachTodo";

/*
 createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/tasks" element={<TodoList />} />
      </Route>
    )
*/

// host/tasks
// host/tasks/20

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/tasks" element={<TodoList />} />
        <Route path="/tasks/:id" element={<EachTodo />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={route} />;
}

export default App;
