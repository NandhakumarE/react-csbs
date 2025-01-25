const URL = "https://jsonplaceholder.typicode.com/todos";

export async function getTodoList(id) {
  let url = URL;
  if (id) url += `/${id}`;
  const response = await fetch(url);
  let data = await response.json();

  if (!Array.isArray(data)) {
    data = [data];
  }
  return data;
}
