import React, {useState} from "react";

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
  const [showBudget, setShowBudget] = 
  useState(false);
  
  
  return (
    <main className="dashboard-container">

      {/* ================= HEADER ================= */}

      <section className="dashboard-header">

        <div>
          <p className="dashboard-date">
            TUESDAY · SEPTEMBER 1, 2026
          </p>

          <h1>
            Good afternoon, Angela 👋
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
              Day 184 of 365
            </h3>

            <span>
              181 days to your passing-out milestone
            </span>
          </div>

        </div>


        <div className="service-progress-wrapper">

          <div className="service-progress">
            <span></span>
          </div>

          <p>50% complete</p>

        </div>


        <button className="set-date-btn" 
        onClick={()=> setShowDateForm(true)}
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
                  ₦50,000
                </h3>

                <div className="budget-numbers">
                  <span>
                    ₦28,650 spent
                  </span>

                  <strong>
                    ₦21,350 left
                  </strong>
                </div>

                <div className="budget-progress">
                  <span></span>
                </div>

                <div className="budget-progress-info">
                  <span>57% used</span>

                  <span>
                    Recommended daily limit ₦712
                  </span>
                </div>

                <button className="manage-budget-btn"
                onClick={()=> setShowBudget(true)}
                >
                  Manage budget
                  <FiChevronRight />
                </button>

              </div>


              {/* INCOME */}
               <div className="small-finance-card">

                <div className="finance-icon green">
                  <FiTrendingUp />
                </div>

                <p>
                  Income this month
                </p>

                <h3>
                  ₦33,000
                </h3>

                <span className="positive">
                  +4.2% from last month
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
                  ₦12,400
                </h3>

                <span>
                  Goal: ₦25,000 emergency fund
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
              onClick={() => setShowCalendar(true)}
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

              <button className="view-calendar-btn">
                View all
                <FiArrowUpRight />
              </button>

            </div>


            <div className="transactions-card">

              <div className="transaction-item">

                <div className="transaction-icon food">
                  🍲
                </div>

                <div>
                  <strong>Food</strong>
                  <span>Yesterday · 2:30 PM</span>
                </div>

                <strong className="expense">
                  -₦3,400
                </strong>

              </div>


              <div className="transaction-item">

                <div className="transaction-icon transport">
                  🚌
                </div>

                <div>
                  <strong>Transportation</strong>
                  <span>Yesterday · 8:10 AM</span>
                </div>

                <strong className="expense">
                  -₦1,800
                </strong>

              </div>


              <div className="transaction-item">

                <div className="transaction-icon data">
                  📱
                </div>

                <div>
                  <strong>Data & Airtime</strong>
                  <span>Monday · 11:20 AM</span>
                </div>

                <strong className="expense">
                  -₦3,500
                </strong>

              </div>

            </div>

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

              <button className="quick-action">

                <div className="quick-action-icon">
                  <FiCreditCard />
                </div>

                <div>
                  <strong>
                    Estimate expenses
                  </strong>

                  <span>
                    Plan your month
                  </span>
                </div>

                <FiChevronRight />

              </button>
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
  <div
    className="dashboard-modal-overlay"
    onClick={() => setShowCalendar(false)}
  >
    <div
      className="dashboard-modal calendar-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <div className="dashboard-modal-header">

        <div>
          <span>YOUR CALENDAR</span>
          <h2>September 2026</h2>
        </div>

        <button
          onClick={() => setShowCalendar(false)}
          className="dashboard-close-btn"
        >
          ×
        </button>

      </div>

      <div className="current-dashboard-date">
        TUESDAY, SEPTEMBER 1, 2026
      </div>

      <div className="simple-calendar">

        {[
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ].map((day) => (
          <strong key={day}>
            {day}
          </strong>
        ))}

        {Array.from(
          { length: 31 },
          (_, i) => i + 1
        ).map((day) => (
          <button
            key={day}
            className={
              day === 19
                ? "calendar-date active"
                : "calendar-date"
            }
          >
            {day}
          </button>
        ))}

      </div>

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
          Service year start

          <input type="date" />
        </label>

        <label>
          Expected completion date

          <input type="date" />
        </label>

        <button
          type="submit"
          className="dashboard-modal-submit"
        >
          Save dates
        </button>

      </form>

    </div>

  </div>
)}

{showBudget && (
  <div
    className="dashboard-modal-overlay"
    onClick={() => setShowBudget(false)}
  >

    <div
      className="dashboard-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <div className="dashboard-modal-header">

        <div>
          <span>YOUR MONEY</span>
          <h2>Manage budget</h2>
        </div>

        <button
          onClick={() => setShowBudget(false)}
          className="dashboard-close-btn"
        >
          ×
        </button>

      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          // Budget update will be connected here later

          setShowBudget(false);
        }}
      >

        <label>
          Monthly budget

          <input
            type="number"
            defaultValue="50000"
          />
        </label>

        <button
          type="submit"
          className="dashboard-modal-submit"
        >
          Update budget
        </button>

      </form>

    </div>

  </div>
)}




      
    </main>
  );
};

export default Dashboard;


