import React from "react";
import "./App.css";
// import UseMemo from './States/UseMemo';
// import User from './ChildTOPARENTPROPS/User';
// import Data from './Map/Data';
import Button from "./Conditional_Code/Button";
import Form from "./Show_AfterClicked/Form";
import Popup from "./PopupModel/Popup";
import UseState from "./States/UseState";
// import UseEffect from './States/UseEffect'
import TodoAdd from "./TODOLIST/TodoAdd";
import Test from "./States/CustomHook/Test";
import Test1 from "./States/CustomHook/Test1";
import UseRef from "./States/UseRef";
import Input from "./Show_ InputFile/Input";
import UseReducer from "./States/UseReducer";
import Props from "./PROPS/Props";
import CompA from "./States/ContextApi/CompA";
import { createContext } from "react";
import AddItem from "./Curd/AddItem";

const FirstName = createContext();
function App() {
  return (
    <>
      {/* <UseRef/> */}
      {/* <Input/> */}
      {/* <UseMemo/> */}
      {/* <User/> */}
      {/* <Data/> */}
      {/* <Button/> */}
      {/* <Form/> */}
      {/* <Popup/> */}
      {/* <UseState /> */}
      {/* <UseEffect/> */}
      {/* TODO LIST */}
      {/* <TodoAdd/> */}
      {/* <Test/> */}
      {/* <Test1/> */}
      {/* <UseReducer/> */}
      {/* <Props/> */}
      {/* <FirstName.Provider value={"Nigar"}>
<CompA/>
</FirstName.Provider> */}
      <AddItem />
    </>
  );
}

export default App;
export { FirstName };
