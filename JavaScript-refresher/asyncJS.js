// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data.filter((d) => d.id < 6)));

//Async await

const getTodos = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();
  console.log(data.filter((d) => d.id < 6));
};
getTodos();
