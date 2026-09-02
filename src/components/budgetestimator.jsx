import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiEdit3,
  FiPlus,
  FiTrash2,
  FiPieChart,
} from "react-icons/fi";

import "../css/budgetEstimator.css";

const BudgetEstimator = () => {
  const navigate = useNavigate();
  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const [budgetAmount, setBudgetAmount] = useState(50000);
  const [editedBudget, setEditedBudget] = useState(50000);

  const [monthlyBudget, setMonthlyBudget] = useState(50000);

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Transportation",
      amount: 4200,
      category: "Transport",
    },
    {
      id: 2,
      name: "Feeding",
      amount: 9600,
      category: "Food",
    },
    {
      id: 3,
      name: "Data & Airtime",
      amount: 3500,
      category: "Utilities",
    },
    {
      id: 4,
      name: "Laundry",
      amount: 2500,
      category: "Personal",
    },
  ]);

  const [showExpenseForm, setShowExpenseForm] =
    useState(false);

  const [newExpense, setNewExpense] = useState({
    name: "",
    amount: "",
    category: "Food",
  });


  const totalSpent = useMemo(() => {
    return expenses.reduce(
      (total, expense) => total + Number(expense.amount),
      0
    );
  }, [expenses]);


  const remaining = monthlyBudget - totalSpent;

  const percentageUsed =
    monthlyBudget > 0
      ? Math.round((totalSpent / monthlyBudget) * 100)
      : 0;


  const addExpense = (event) => {

    event.preventDefault();

    if (!newExpense.name || !newExpense.amount) {
      return;
    }

    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        name: newExpense.name,
        amount: Number(newExpense.amount),
        category: newExpense.category,
      },
    ]);

    setNewExpense({
      name: "",
      amount: "",
      category: "Food",
    });

    setShowExpenseForm(false);
  };


  const deleteExpense = (id) => {

    setExpenses(
      expenses.filter(
        (expense) => expense.id !== id
      )
    );

  };


  return (
    <main className="budget-page">

      /* ================= HEADER ================= */

      <header className="budget-page-header">

        <div className="budget-heading">

          <button className="back-button" 
          onClick={() => navigate("/")}
          >
            <FiArrowLeft />
          </button>

          <div>
            <p>
              CORPER COMPASS
            </p>

            <h1>
              Budget Estimator
            </h1>
          </div>

        </div>


        <button
          className="budget-add-button"
          onClick={() => setShowExpenseForm(true)}
        >
          <FiPlus />
          Add expense
        </button>

      </header>


      {/* ================= SUMMARY ================= */}

      <section className="budget-summary">

        <div className="budget-summary-main">

          <p>
            MONTHLY BUDGET
          </p>

          <h2>
            ₦{monthlyBudget.toLocaleString()}
          </h2>

          <button className="edit-budget" 
          onClick={()=> {
            setEditedBudget(budgetAmount);
            setIsEditingBudget(true);
          }}
          >
            <FiEdit3 />
            Edit budget
          </button>

        </div>


        <div className="budget-summary-stats">

          <div>
            <span>
              Total spent
            </span>

            <strong>
              ₦{totalSpent.toLocaleString()}
            </strong>
          </div>


          <div>
            <span>
              Remaining
            </span>

            <strong className="remaining-money">
              ₦{remaining.toLocaleString()}
            </strong>
          </div>


          <div>
            <span>
              Used
            </span>

            <strong>
              {percentageUsed}%
            </strong>
          </div>

        </div>

      </section>
      
      {/* {isEditingBudget && (
  <div className="budget-edit-box">

    <div className="budget-edit-header">
      <div>
        <span>MONTHLY BUDGET</span>
        <h3>Edit your budget</h3>
      </div>

      <button
        className="budget-edit-close"
        onClick={() => setIsEditingBudget(false)}
      >
        ×
      </button>
    </div>

    <label>
      Monthly budget

      <input
        type="number"
        value={editedBudget}
        onChange={(e) => setEditedBudget(e.target.value)}
        placeholder="Enter budget amount"
      />
    </label>

    <div className="budget-edit-actions">

      <button
        type="button"
        onClick={() => setIsEditingBudget(false)}
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={() => {

          if (!editedBudget || Number(editedBudget) <= 0) {
            alert("Please enter a valid budget.");
            return;
          }

          setBudgetAmount(Number(editedBudget));
          setIsEditingBudget(false);

        }}
      >
        Save budget
      </button>

    </div>

  </div>
)} */}


      {/* ================= PROGRESS ================= */}

      <section className="budget-progress-card">

        <div className="budget-progress-heading">

          <div>
            <p>
              BUDGET PROGRESS
            </p>

            <h2>
              You're doing well
            </h2>
          </div>

          <strong>
            {percentageUsed}%
          </strong>

        </div>


        <div className="large-progress">
          <span
            style={{
              width: `${Math.min(percentageUsed, 100)}%`,
            }}
          />
        </div>


        <div className="progress-footer">
          <span>
            ₦{totalSpent.toLocaleString()} spent
          </span>

          <span>
            ₦{remaining.toLocaleString()} remaining
          </span>
        </div>

      </section>


      {/* ================= EXPENSES ================= */}

      <section className="expense-section">

        <div className="expense-section-header">

          <div>
            <p>
              YOUR EXPENSES
            </p>

            <h2>
              Monthly spending
            </h2>
          </div>

          <div className="expense-total">
            ₦{totalSpent.toLocaleString()}
          </div>

        </div>


        <div className="expense-list">

          {expenses.map((expense) => (

            <div
              className="expense-item"
              key={expense.id}
            >

              <div className="expense-category-icon">
                <FiPieChart />
              </div>


              <div className="expense-information">

                <strong>
                  {expense.name}
                </strong>

                <span>
                  {expense.category}
                </span>

              </div>


              <strong className="expense-amount">
                -₦{expense.amount.toLocaleString()}
              </strong>


              <button
                className="delete-expense"
                onClick={() =>
                  deleteExpense(expense.id)
                }
              >
                <FiTrash2 />
              </button>

            </div>

          ))}


          {expenses.length === 0 && (

            <div className="empty-expenses">
              No expenses added yet.
            </div>

          )}

        </div>


        <button
          className="add-expense-large"
          onClick={() => setShowExpenseForm(true)}
        >
          <FiPlus />
          Add new expense
        </button>

      </section>


      {/* ================= ADD EXPENSE MODAL ================= */}

      {showExpenseForm && (

        <div className="modal-overlay">

          <form
            className="expense-modal"
            onSubmit={addExpense}
          >

            <div className="modal-header">

              <div>
                <p>
                  BUDGET ESTIMATOR
                </p>

                <h2>
                  Add expense
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowExpenseForm(false)
                }
              >
                ×
              </button>

            </div>


            <label>
              Expense name

              <input
                type="text"
                placeholder="e.g. Transportation"
                value={newExpense.name}
                onChange={(event) =>
                  setNewExpense({
                    ...newExpense,
                    name: event.target.value,
                  })
                }
              />

            </label>


            <label>
              Amount

              <input
                type="number"
                placeholder="₦0"
                value={newExpense.amount}
                onChange={(event) =>
                  setNewExpense({
                    ...newExpense,
                    amount: event.target.value,
                  })
                }
              />

            </label>


            <label>
              Category

              <select
                value={newExpense.category}
                onChange={(event) =>
                  setNewExpense({
                    ...newExpense,
                    category: event.target.value,
                  })
                }
              >
                <option>Food</option>
                <option>Transport</option>
                <option>Utilities</option>
                <option>Personal</option>
                <option>Others</option>
              </select>

            </label>


            <button
              type="submit"
              className="save-expense"
            >
              Save expense
            </button>

          </form>

        </div>

      )}

      {isEditingBudget && (
  <div
    className="budget-modal-overlay"
    onClick={() => setIsEditingBudget(false)}
  >
    <div
      className="budget-modal"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Modal header */}

      <div className="budget-modal-header">

        <div>
          <span>YOUR MONEY</span>
          <h2>Edit budget</h2>
        </div>

        <button
          className="budget-modal-close"
          onClick={() => setIsEditingBudget(false)}
          aria-label="Close"
        >
          ×
        </button>

      </div>


      {/* Budget form */}

      <div className="budget-modal-body">

        <label>
          Monthly budget

          <div className="budget-input-wrapper">
            <span>₦</span>

            <input
              type="number"
              value={editedBudget}
              onChange={(e) =>
                setEditedBudget(e.target.value)
              }
              autoFocus
            />
          </div>

        </label>

        <p className="budget-modal-description">
          Set the amount you plan to spend each month
          during your service year.
        </p>

      </div>


      {/* Buttons */}

      <div className="budget-modal-actions">

        <button
          type="button"
          className="budget-cancel-btn"
          onClick={() => setIsEditingBudget(false)}
        >
          Cancel
        </button>

        <button
          type="button"
          className="budget-save-btn"
          onClick={() => {

            if (
              !editedBudget ||
              Number(editedBudget) <= 0
            ) {
              alert("Please enter a valid budget.");
              return;
            }

            setBudgetAmount(Number(editedBudget));
            setIsEditingBudget(false);

          }}
        >
          Save budget
        </button>

      </div>

    </div>
  </div>
)}

    </main>
  );
};

export default BudgetEstimator;