import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState('2020');

  const selectFilterYearHandler = (year) => {
    console.log(year);
    setFilterYear(year);
  };

  return (
      
      <Card className="expenses">
      <ExpensesFilter selected={filterYear} onSelectFilterYear={selectFilterYearHandler}/>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>

        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
      </Card>
  );
};

export default Expenses;
