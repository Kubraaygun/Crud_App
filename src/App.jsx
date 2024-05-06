import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Mehmet",
      mail: "mehmet60@gmail.com",
      age: 60,
    },
    {
      name: "Ali",
      mail: "alihttp@gmail.com",
      age: 30,
    },
  ]);
  return (
    <div className="container">
      <h2 className=" text-center my-5">Kullanici Paneli</h2>
      <Form />
      <List users={users} />
    </div>
  );
};

export default App;
