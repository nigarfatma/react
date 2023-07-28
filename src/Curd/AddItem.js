import React, { useState } from "react";

const AddItem = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const formHandler = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    setList([...list, item.name]);
    console.log("added", item);
    setItem({
      name: "",
    });
  };
  const delteHandler = (id) => {
    console.log("delte", id);
    const deleteItem = list.filter((elem, ind) => {
      return ind != id;
    });
    setList(deleteItem);
  };
  const removeAll = () => {
    setList([]);
  };
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Add Your List"
          onChange={formHandler}
          name="name"
          value={item.name}
        />
        <ul>
          {list.map((val, index) => {
            return (
              <li key={index}>
                {val}
                <button type="button" onClick={() => delteHandler(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>

        <button type="submit">Add</button>
      </form>
      <button onClick={removeAll}>remove all</button>
    </>
  );
};
export default AddItem;
