import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [eneteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [eneteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   eneteredTitle: "",
  //   enteredAmount: "",
  //   eneteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);


    //Not guaranteed to use latest state snapshot, may be outdated if multiple states are scheduled
    // setUserInput({
    //   ...userInput,
    //   eneteredTitle: event.target.value
    // });


    //Use this approach as this is safer, React schedules state updates
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     eneteredTitle: event.target.value
    //   };
    // });


  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value
    //   };
    // });

  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   eneteredDate: event.target.value
    // });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     eneteredDate: event.target.value
    //   };
    // });

  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: eneteredTitle,
      amount: enteredAmount,
      date: new Date(eneteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={eneteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            value={eneteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
