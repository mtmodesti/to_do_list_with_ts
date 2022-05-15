import { useState } from "react";
import Todo from "./components/Todo";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

export default function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const handleLoad = (value: boolean) => {
    setLoad(value);
  };

  const handleError = (err: any) => {
    console.log({
      message: err,
    });
  };
//tes
  const handleListTask = (e: any) => {
    setTimeout(() => {
      const title: string = e.target.textContent;
      const user: any = data.filter((task: any) => task.title === title);
      toast(`User ${user[0].id} Email: ${user[0].user_id}`, {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }, 500);
  };

  const handleRemove = (e: any) => {
    const title = e.target.textContent;
    const taskRemoved = data.filter((task: any) => task.title !== title);
    setData(taskRemoved);
  };

  const handleData = async () => {
    handleLoad(true);
    await fetch("https://gorest.co.in/public/v2/todos")
      .then((response) => response.json())
      .then((data) => {
        handleLoad(false);
        setData(data);
      })
      .catch((err) => handleError(err));
  };

  return (
    <div className="main">
      <div>
        <Toaster gutter={1} />
      </div>

      <button onClick={handleData}> Fetch Todos </button>

      {load ? (
        <span>loading...</span>
      ) : (
        <li role="list">
          {data.map((item, index) => (
            <Todo
              handleListTask={handleListTask}
              handleRemove={handleRemove}
              toDoTask={item}
              key={index}
            />
          ))}
        </li>
      )}
    </div>
  );
}
