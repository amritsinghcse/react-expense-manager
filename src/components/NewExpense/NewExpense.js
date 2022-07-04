import React, {useState} from 'react';
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

  const [formMode, setFormMode] = useState(false);

  const saveExpenseDataHandler = (expense) => {

    const expenseData = {
      ...expense,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setFormMode(false);
  };

  const formModeHandler = event => {
    setFormMode(true);
  }

  const setFormHandlerFalse = event => {
    setFormMode(false);
  }


  return (
    <div className="new-expense">
      {!formMode && <button onClick={formModeHandler}>Add New Expense</button>}
      {formMode && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onSetFormHandlerFalse={setFormHandlerFalse} />}
    </div>
  );
};

export default NewExpense;
