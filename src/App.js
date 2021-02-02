import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NewJournalForm from "./Features/JournalManagement/NewJournalForm";
import JournalList from "./Features/JournalManagement/JournalList";
import LoginPage from "./Features/Login/Login";
import useTodoState from "./Features/JournalManagement/useTodoState"
function App() {
  const productData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available"
    },
    {
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Out of Stock"
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available"
    },
    {
      id: 4,
      name: "ADIDAS Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock"
    }
  ];

  const { todos, addTodo, deleteTodo } = useTodoState(productData);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="TitleArea">
          <h1>Mini Journal App</h1>
        </div>

        <div className="option-area">
          <Link to="/my-journal" className="tab" >
            All entries
          </Link>
          <Link to="/new-journal" className="tab" >
            New journal
          </Link>
          <Link to="/login" className="tab" >
            Login
          </Link>
        </div>

        <div className="MainArea">
          <Switch>
          <Route exact path="/">
            {/* <JournalList /> */}
              
          </Route>
          <Route path="/my-journal">
            <JournalList newList={todos} deLeTe={deleteTodo}/>
          </Route>
          <Route path="/new-journal">
            <NewJournalForm saveTodo={ todoText =>{
              const trimmed = todoText.name.trim();
              const trimmedDes = todoText.description.trim();
              if (trimmed.length > 0 && trimmedDes.length > 0) {
              addTodo(todoText)
              }}}/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
