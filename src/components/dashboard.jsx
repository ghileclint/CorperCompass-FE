import React, {useMemo, useEffect, useState} from "react";
import {Link} from "react-router-dom"


import {
  FiArrowUpRight,
  FiCalendar,
  FiCheckCircle,
  FiChevronRight,
  FiCompass,
  FiCreditCard,
  FiMapPin,
  FiPlus,
  FiShoppingBag,
  FiTrendingUp,
  FiUsers,
  FiMessageCircle,
} from "react-icons/fi";

import "../css/dashboard.css";
import  "../css/budgetestimator.css"

const Dashboard = () => {
  const [showExpenseForm, setShowExpenseForm] = 
  useState(false);
  const [showCalendar, setShowCalendar] = 
  useState(false);
  const [showDateForm, setShowDateForm] = 
  useState(false);
  // const [showBudget, setShowBudget] = 
  // useState(false);
  const [serviceStartDate, setServiceStartDate] = useState(
    localStorage.getItem("serviceStartDate") || ""
  );
  
  const [startDateInput, setStartDateInput] = useState(
    localStorage.getItem("serviceStartDate") || ""
  );

  const [endDateInput, setEndDateInput] = useState("");
  const [budgetAmount, setBudgetAmount] = useState(()=> {
    const savedBudget = localStorage.getItem("budgetAmount");
    return savedBudget ? parseFloat(savedBudget) : 50000;
  });
  
  const [showAllTransactions, setShowAllTransactions] = useState(false);

  const [expenses, setExpenses] = useState( () => {
     const savedExpenses = localStorage.getItem("expenses");

      try{
        const parsedExpenses = savedExpenses ? JSON.parse(savedExpenses) : [];
        return Array.isArray(parsedExpenses) ? parsedExpenses : [];
      } catch (error) {
        console.error("Error parsing saved expenses:", error);
        return [];
      }
    });

    const recentTransactions = [...expenses].sort((a, b) => Number(b.id || 0) - Number(a.id || 0) ).slice(0, 3);
    useEffect(() => {
      const loadExpenses = () => {
        const savedExpenses =localStorage.getItem("expenses");
        try {
          const parsedExpenses = savedExpenses ? JSON.parse(savedExpenses) : [];

          setExpenses(Array.isArray(parsedExpenses) ? parsedExpenses : []);
        } catch {
          setExpenses([]);
        }
      };
      loadExpenses();

      window.addEventListener("expensesUpdated", loadExpenses);

      return () => {
        window.removeEventListener("expensesUpdated", loadExpenses);
      };
    }, [] );

  const [newExpense, setNewExpense] = useState({
      name: "",
      amount: "",
      category: "Food",
    });
  
  const totalSpent = expenses.reduce(
      (total, expense) => total + Number(expense.amount || 0),
      0
    );
    const budgetRemaining = Math.max(0, budgetAmount - totalSpent);
    const suggestedSavings = Math.round(budgetAmount * 0.15);
  
    
   const percentageUsed =
    budgetAmount > 0
      ? Math.round((totalSpent / budgetAmount) * 100)
      : 0;
// ----------------setting current date-----------


const TOTAL_SERVICE_DAYS = 365;

      const [today, setToday] = useState(new Date());

      useEffect (() => {
        const updateDate = () => {
          setToday(new Date());
        };
        updateDate(); // Initial call to set the date immediately

        const timer = setInterval(updateDate, 60000); // Update every minute
        return () => clearInterval(timer);
      }, []);

      const getStartDate = () => {
        if (!serviceStartDate) return null;
        const [year, month, day] = serviceStartDate.split("-").map(Number);
        if (!year || !month || !day) return null;
        const date = new Date(year, month - 1, day);
        return isNaN(date.getTime()) ? null : date;
      };
      const startDate = getStartDate();
      const daysElapsed = startDate ? Math.floor((today.setHours(0, 0, 0, 0) - 
    new Date(startDate).setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24)) : 0;

      const formattedDate = today.toLocaleDateString("en-US" , {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });

// ----------calculating the completion date ------------

     const getCompletionDate = (startDate) => {
      if (!startDate) return null;
      const [year, month, day] = startDate.split("-").map(Number);
      if(!year || !month || !day) return null;
      const date = new Date(year, month - 1, day);
      if(isNaN(date.getTime())) return null;
      date.setDate(date.getDate() + 365);
      return date;
     }

     const completionDate = getCompletionDate(serviceStartDate);

     const daysRemaining = Math.max(0, TOTAL_SERVICE_DAYS - daysElapsed);
     const percentageComplete = Math.min(100, Math.round((daysElapsed / TOTAL_SERVICE_DAYS) * 100));

     const [calendarDate, setCalendarDate] = useState(new Date());

     const calendarYear = calendarDate.getFullYear();
     const calendarMonth = calendarDate.getMonth();

     const firstDay = new Date(
      calendarYear,
      calendarMonth,
      1
     ).getDay();

     const daysInMonth = new Date(
      calendarYear,
      calendarMonth + 1, 0
     ).getDate();

     const todayDate = new Date();
     const isToday =(day) => {
      const now = new Date();
      return(
        day === now.getDate() && calendarDate.getMonth() === now.getMonth() && calendarDate.getFullYear() === now.getFullYear()
      )
     }
    const hour = new Date().getHours();
    const greetings = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";



  return (
    <main className="dashboard-container">

      {/* ================= HEADER ================= */}

      <section className="dashboard-header">

        <div>
          <p className="dashboard-date">
            {formattedDate}
          </p>

          <h1>
            {greetings}, Angela 👋
          </h1>

          <p className="dashboard-subtitle">
            Everything you need to make your service year
            easier, smarter and more connected.
          </p>
        </div>

        <div className="dashboard-header-buttons">

          <button className="dashboard-outline-btn">
            <FiCompass />
            Explore my area
          </button>

          <button className="dashboard-primary-btn" 
          onClick={() => setShowExpenseForm(true)}
          >
            <FiPlus />
            Add expense
          </button>

        </div>

      </section>


      {/* ================= SERVICE YEAR ================= */}

      <section className="service-year-card">

        <div className="service-year-left">

          <div className="service-year-icon">
            <FiCheckCircle />
          </div>

          <div>
            <p>SERVICE YEAR</p>

            <h3>
              {daysRemaining} of 365
            </h3>

            <span>
              {daysRemaining} days to your passing-out milestone
            </span>
          </div>

        </div>


        <div className="service-progress-wrapper">

          <div className= "service-progress">
            <span style={{width: `${percentageComplete}%`}}></span>

          </div>

          <p> {percentageComplete.toFixed(0)}% Complete</p>

        </div>


        <button className="set-date-btn" 
        onClick={() => {
          setStartDateInput(
            localStorage.getItem("serviceStartDate") || ""
          );
          setShowDateForm(true)
        } }
        >
          Set dates
          <FiChevronRight />
        </button>

      </section>
      
    


      {/* ================= MAIN GRID ================= */}

      <div className="dashboard-main-grid">

        {/* LEFT COLUMN */}

        <div className="dashboard-left-column">

          {/* MONEY */}

          <section className="dashboard-section">

            <div className="section-title-row">

              <div>
                <p className="section-label">
                  YOUR MONEY
                </p>

                <h2>
                  Budget overview
                </h2>
              </div>

              <a href="/budget">
                Open estimator
                <FiArrowUpRight />
              </a>

            </div>


            <div className="finance-grid">

              {/* MAIN BUDGET */}

              <div className="main-budget-card">

                <div className="budget-card-top">
                  <span>August budget</span>

                  <button className="more-button">
                    •••
                  </button>
                </div>

                <h3>
                  ₦{budgetAmount.toLocaleString()}
                </h3>

                <div className="budget-numbers">
                  <span>
                    Total spent
                  </span>

                  <strong>
                     ₦{totalSpent.toLocaleString()}
                  </strong>
                </div>

                <div className="budget-progress">
                  <span></span>
                </div>

                <div className="budget-progress-info">
                  <span>{percentageUsed}% used</span>


                  <span>
                    Recommended daily limit ₦{(budgetAmount / 30).toLocaleString("en-NG", {maximumFractionDigits: 0,})}
                  </span>
                </div>

                {/* <button className="manage-budget-btn"
                onClick={()=> {
                  setEditedBudget(budgetAmount);
                  setShowBudget(true);
                } }
                >
                  Manage budget
                  <FiChevronRight />
                </button> */}

              </div>


              {/* INCOME */}
               <div className="small-finance-card">

                <div className="finance-icon green">
                  <FiTrendingUp />
                </div>

                <p>
                  Budget remaining
                </p>

                <h3>
                  ₦{budgetRemaining.toLocaleString()}
                </h3>

                <span className="positive">
                  ₦{totalSpent.toLocaleString()} used of ₦{budgetAmount.toLocaleString()}
                </span>

              </div>


              {/* SAVINGS */}

              <div className="small-finance-card">

                <div className="finance-icon yellow">
                  <FiCreditCard />
                </div>

                <p>
                  Set aside
                </p>

                <h3>
                  ₦{suggestedSavings.toLocaleString()}
                </h3>

                <span>
                  15% of your ₦{budgetAmount.toLocaleString()} budget
                  
                </span>

              </div>

            </div>

          </section>


          {/* UPCOMING */}

          <section className="dashboard-section">

            <div className="section-title-row">

              <div>
                <p className="section-label">
                  STAY ON TRACK
                </p>

                <h2>
                  Upcoming
                </h2>
              </div>

              <button className="view-calendar-btn"
              onClick={() => {
                setCalendarDate(new Date());
                setShowCalendar(true);
              } }
              >
                View calendar
                <FiArrowUpRight />
              </button>

            </div>


            <div className="upcoming-card">

              <div className="upcoming-item">

                <div className="upcoming-icon">
                  <FiUsers />
                </div>

                <div className="upcoming-details">
                  <strong>
                    CDS meeting
                  </strong>

                  <span>
                    Community Development Service
                  </span>
                </div>

                <div className="upcoming-time">
                  <strong>Today</strong>
                  <span>10:00 AM</span>
                </div>

                <FiChevronRight />

              </div>


              <div className="upcoming-item">

                <div className="upcoming-icon">
                  <FiCheckCircle />
                </div>

                <div className="upcoming-details">
                  <strong>
                    Clearance deadline
                  </strong>

                  <span>
                    Secretariat
                  </span>
                </div>

                <div className="upcoming-time">
                  <strong>Tomorrow</strong>
                  <span>4:00 PM</span>
                </div>

                <FiChevronRight />

              </div>


              <div className="upcoming-item">

                <div className="upcoming-icon">
                  <FiShoppingBag />
                </div>

                <div className="upcoming-details">
                  <strong>
                    Market day
                  </strong>

                  <span>
                    Central Market
                  </span>
                </div>

                <div className="upcoming-time">
                  <strong>Saturday</strong>
                  <span>8:00 AM</span>
                </div>

                <FiChevronRight />

              </div>

            </div>

          </section>


          {/* RECENT TRANSACTIONS */}

          <section className="dashboard-section">

            <div className="section-title-row">

              <div>
                <p className="section-label">
                  SPENDING
                </p>

                <h2>
                  Recent transactions
                </h2>
              </div>

              <button className="view-calendar-btn" 
              onClick={() => setShowAllTransactions(true)}
              >
                View all
                <FiArrowUpRight />
              </button>

            </div>


            

              
                {recentTransactions.length > 0 ? (
  recentTransactions.map((expense) => (
<div className="transaction" key={expense.id}>
      <div className="transaction-info">
        <strong>{expense.name}</strong>
        <span>
          {new Date(Number(expense.id)).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          })}
        </span>
       
      </div>

      <div className="transaction-amount">
        -₦{Number(expense.amount).toLocaleString()}
         <span>
          {new Date(Number(expense.id)).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
    

    
  ))
) : (
  <p className="no-transactions">
    No recent transactions
  </p>
)}
         

   </section>

    </div>


        {/* RIGHT COLUMN */}

        <aside className="dashboard-right-column">

          {/* QUICK ACTIONS */}

          <section className="dashboard-section">

            <p className="section-label">
              FOR CORPERS
            </p>

            <h2>
              Quick actions
            </h2>


            <div className="quick-actions-card">

              <Link to = "/budget" className="quick-action">

              <button className="quick-action">

                <div className="quick-action-icon">
                  <FiCreditCard />
                </div>

                <div>
                  <strong>
                    Estimate expenses
                  </strong>

                  <span>
                    Plan your ₦{budgetAmount.toLocaleString()} budget
                  </span>
                </div>

                <FiChevronRight />

              </button>
               </Link>

               <button className="quick-action">

                <div className="quick-action-icon">
                  <FiMapPin />
                </div>

                <div>
                  <strong>
                    Find nearby
                  </strong>

                  <span>
                    Markets, food & transport
                  </span>
                </div>

                <FiChevronRight />

              </button>


              <button className="quick-action">

                <div className="quick-action-icon">
                  <FiShoppingBag />
                </div>

                <div>
                  <strong>
                    Shop the market
                  </strong>

                  <span>
                    Corper-friendly deals
                  </span>
                </div>

                <FiChevronRight />

              </button>


              <button className="quick-action">

                <div className="quick-action-icon">
                  <FiUsers />
                </div>

                <div>
                  <strong>
                    Join a community
                  </strong>

                  <span>
                    Connect with your batch
                  </span>
                </div>

                <FiChevronRight />

              </button>

            </div>

          </section>


          {/* SPENDING BREAKDOWN */}

          <section className="side-card">

            <div className="side-card-heading">
              <div>
                <p className="section-label">
                  THIS MONTH
                </p>

                <h2>
                  Spending breakdown
                </h2>
              </div>
            </div>


            <div className="spending-total">
              <strong>₦28,650</strong>
              <span>Total spent</span>
            </div>


            <div className="spending-row">
              <span>Food</span>
              <strong>₦9,200</strong>
            </div>

            <div className="spending-bar">
              <span style={{ width: "68%" }}></span>
            </div>


            <div className="spending-row">
              <span>Transport</span>
              <strong>₦7,800</strong>
            </div>

            <div className="spending-bar">
              <span style={{ width: "52%" }}></span>
            </div>


            <div className="spending-row">
              <span>Utilities</span>
              <strong>₦6,150</strong>
            </div>

            <div className="spending-bar">
              <span style={{ width: "42%" }}></span>
            </div>

          </section>


          {/* CORPER TIP */}

          <section className="tip-card">

            <div className="tip-icon">
              💡
            </div>

            <div>
              <p>
                CORPER TIP
              </p>

              <h3>
                Track transportation separately
              </h3>
              <span>
                It can quietly become one of your
                biggest monthly expenses.
              </span>
            </div>

          </section>


          {/* COMMUNITY */}

          <section className="community-card">

            <div className="community-card-header">

              <div>
                <p className="section-label">
                  COMMUNITY
                </p>

                <h2>
                  What Corpers are saying
                </h2>
              </div>

              <FiMessageCircle />

            </div>


            <div className="community-post">

              <div className="post-avatar">
                TM
              </div>

              <div>
                <strong>
                  Tolu M.
                </strong>

                <span>
                  Ibadan · 12 min ago
                </span>

                <p>
                  Anyone knows a good place for
                  affordable phone repairs around
                  Bodija?
                </p>
              </div>

            </div>


            <button className="community-button">
              Open social feed
              <FiChevronRight />
            </button>

          </section>

        </aside>

      </div>

      {showExpenseForm && (
        <div className="dashboard-modal-overlay" onClick={() => 
          setShowExpenseForm(false)}
          >
            <div className="dashboard-modal" onClick={(e) => 
              e.stopPropagation() }
              >
                <div className="dashboard-modal-header">
                  <div>
                    <span>YOUR MONEY</span>
                    <h2>Add Expense</h2>
                  </div>

                  <button onClick={() => setShowExpenseForm(false)}
                    className="dashboard-close-btn">
                      x
                  </button>

                </div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setShowExpenseForm(false);
                }}
                 >
                  <label>
                    Expense name
                    <input type="text"
                    placeholder="e.g. Transportation" />
                  </label>
                  <label>
                    Amount 
                    <input type="number"
                    placeholder="₦0" />
                  </label>
                  <label>
                    Category 
                    <select>
                      <option>Food</option>
                      <option>Transportation</option>
                      <option>Accommodation</option>
                      <option>Data</option>
                      <option>Shopping</option>
                      <option>Other</option>
                    </select>
                  </label>

                  {/* <label>
                    Date 
                    <input type="date" defaultValue="2026-09-01" />
                  </label> */}

                  <button type="submit" className="dashboard-modal-submit">
                    Save expense
                  </button>

                </form>

            </div>
        </div>
      )}

     {showCalendar && (
  <div className="dashboard-modal-overlay">
    <div className="dashboard-modal">

      <div className="dashboard-modal-header">
        <button
          type="button"
          onClick={() =>
            setCalendarDate(
              new Date(calendarYear, calendarMonth - 1, 1)
            )
          }
        >
          ‹
        </button>

        <h2>
          {calendarDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <button
          type="button"
          onClick={() =>
            setCalendarDate(
              new Date(calendarYear, calendarMonth + 1, 1)
            )
          }
        >
          ›
        </button>
      </div>

      <div className="calendar-weekdays">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>

      <div className="calendar-grid">
        {Array.from({ length: firstDay }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="calendar-empty"
          />
        ))}

        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;

          return (
            <button
              key={day}
              type="button"
              className={`calendar-day ${
                isToday(day)
                  ? "calendar-day today"
                  : "calendar-day"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="dashboard-modal-close"
        onClick={() => setShowCalendar(false)}
      >
        Close
      </button>

    </div>
  </div>
)}
     




{showDateForm && (
  <div
    className="dashboard-modal-overlay"
    onClick={() => setShowDateForm(false)}
  >

    <div
      className="dashboard-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <div className="dashboard-modal-header">

        <div>
          <span>SERVICE YEAR</span>
          <h2>Set service dates</h2>
        </div>

        <button
          onClick={() => setShowDateForm(false)}
          className="dashboard-close-btn"
        >
          ×
        </button>

      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowDateForm(false);
        }}
      >

        <label>
          Service start date

          <input type="date" value={startDateInput} onChange={(e) => setStartDateInput(e.target.value)} />
        </label>

        <label>
          Expected completion date

          <input type="date" value={endDateInput} onChange={(e) => setEndDateInput(e.target.value)} />
        </label>

        <button
          type="button" onClick={()=> {
            if (!startDateInput) {
              alert("Please select your service start date.");
              return;
            }
            // if (new Date(endDateInput) < new Date(startDateInput)){
            //   alert("End date cannot be before start date.");
            //   return;
            // }
            setServiceStartDate(startDateInput);
            localStorage.setItem("serviceStartDate", startDateInput);
            
            // setServiceEndDate(endDateInput);
            // localStorage.setItem("serviceEndDate", endDateInput);
            setShowDateForm(false);
          }}
          className="dashboard-modal-submit"
        >
          Save dates
        </button>

      </form>

    </div>

  </div>
)}

        {showAllTransactions && (
  <div className="transactions-modal-overlay">
    <div className="transactions-modal">

      <div className="transactions-modal-header">
        <div>
          <h2>All Transactions</h2>
          <p>All your saved expenses</p>
        </div>

        <button
          type="button"
          className="transactions-modal-close"
          onClick={() => setShowAllTransactions(false)}
          aria-label="Close transactions"
        >
          ×
        </button>
      </div>

      <div className="all-transactions-list">
        {expenses.length > 0 ? (
          [...expenses]
            .sort(
              (a, b) =>
                Number(b.id || 0) - Number(a.id || 0)
            )
            .map((expense) => (
              <div
                className="transaction"
                key={expense.id}
              >
                <div className="transaction-info">
                  <strong>{expense.name}</strong>

                  <span>
                    {new Date(
                      Number(expense.id)
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <div className="transaction-amount">
                  <strong>
                    -₦
                    {Number(
                      expense.amount
                    ).toLocaleString()}
                  </strong>

                  <span>
                    {new Date(
                      Number(expense.id)
                    ).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))
        ) : (
          <p className="no-transactions">
            No expenses recorded yet.
          </p>
        )}
      </div>

      <button
        type="button"
        className="transactions-modal-footer-btn"
        onClick={() => setShowAllTransactions(false)}
      >
        Close
      </button>

    </div>
  </div>
)}


      
    </main>
  );
};

export default Dashboard;


