import React, { useState } from "react";

import "./ExpenseItem.css";

import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  // let title = props.title;
  const clickHandler = () => {
    setTitle("Updated Title");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price"> {props.amount}$</div>

      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
