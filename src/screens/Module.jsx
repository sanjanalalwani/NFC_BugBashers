import React from "react";
import "../css/module.css";
import { Link } from 'react-router-dom'; 

export default function Module(){
    return(
        <div class="mats">
         <Link to="/module1" class="card1"><div >
      <p class="card-title">Module 1: Understanding Income and Expenses</p>
      <p class="small-desc">
      <ul>Lesson 1: Types of Income</ul>
      <li>Definition of earned income, passive income, and investment income.</li>
      <li>Examples of each type of income source.</li>
      <ul>Lesson 2: Tracking Expenses</ul>

      <li>Importance of keeping track of daily expenses.</li>
      <li>Practical tools and techniques for budgeting.</li>
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div></Link>
<Link to="/module2" class="card1"><div >
      <p class="card-title">Module 2: Budgeting and Saving</p>
      <p class="small-desc">
      <ul>Lesson 1: Creating a Budget</ul>
      <li>Setting financial goals and priorities.</li>
      <li>Allocating income for essentials, savings, and discretionary spending</li>
      <ul>Lesson 2: Emergency Fund and Saving Goals</ul>

      <li>Building an emergency fund for unexpected expenses.</li>
      <li>Setting short-term and long-term saving goals</li>
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div></Link>

<Link to="/module3" class="card1"><div >
      <p class="card-title">Module 3: Banking and Basic Financial Services</p>
      <p class="small-desc">
      <ul>Lesson 1: Introduction to Banking</ul>
      <li>Understanding basic banking services like checking and savings accounts.</li>
      
      <ul>Lesson 2: Using ATMs and Online Banking</ul>

      <li>How to use ATMs for withdrawals and deposits.</li>
      <li>Introduction to online banking and digital transactions.</li>
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div></Link>
<Link to="/module4" class="card1"><div >
      <p class="card-title">Module 4: Practice Net Banking</p>
      <p class="small-desc">
      <ul>Lesson 1: Creating a Budget</ul>
      <li>Setting financial goals and priorities.</li>
      <li>Allocating income for essentials, savings, and discretionary spending</li>
      <ul>Lesson 2: Emergency Fund and Saving Goals</ul>

      <li>Building an emergency fund for unexpected expenses.</li>
      <li>Setting short-term and long-term saving goals</li>
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div></Link>
<Link to="/module5" class="card1"><div >
      <p class="card-title">Module 5: Managing Debt Responsibly</p>
      <p class="small-desc">
      <ul>Lesson 1: Types of Debt</ul>
      <li>Differentiating between good debt (e.g., education, home) and bad debt (e.g., high-interest credit cards).</li>
      <ul>Lesson 2: Debt Repayment Strategies</ul>

      <li>Techniques for effective debt repayment, including the snowball and avalanche methods.</li>
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div></Link>
<Link to="/module6" class="card1"><div >
      <p class="card-title">Module 6: Introduction to Investing</p>
      <p class="small-desc">
      <ul>Lesson 1: Basics of Investing</ul>
      <li>Understanding the concept of risk and return.</li>
      <li>Introduction to stocks, bonds, and mutual funds.</li>
      <ul>Lesson 2: Building a Diversified Portfolio</ul>

      <li>The importance of diversification in reducing investment risk.</li>
      <li>Strategies for creating a balanced investment portfolio.</li>
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div></Link>
<Link to="/module7" class="card1"><div >
      <p class="card-title">Module 7: Planning for the Future</p>
      <p class="small-desc">
      <ul>Lesson 1: Retirement Planning</ul>
      <li>Introduction to retirement accounts like 401(k)s and IRAs.</li>
      <li>Importance of early retirement planning.</li>
      <ul>Lesson 2: Insurance and Risk Management</ul>

      <li>Understanding different types of insurance (e.g., health, life, property).</li>
      <li>Evaluating insurance needs and coverage options.</li>
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div></Link>
<Link to="/module8" class="card1"><div >
      <p class="card-title">Module 8: Financial Literacy and Legal Rights</p>
      <p class="small-desc">
      <ul>Lesson 1: Consumer Rights and Responsibilities</ul>
      <li>Understanding consumer protection laws.</li>
      <li>How to avoid financial scams and fraud.</li>
      <ul>Lesson 2: Understanding Credit Scores and Reports</ul>

      <li>Importance of credit scores in financial transactions.</li>
      <li>Strategies for building and maintaining a good credit history.</li>
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div></Link>
<Link to="/module9" class="card1"><div >
      <p class="card-title">Module 9: Navigating Government Programs and Resources</p>
      <p class="small-desc">
      <ul>Lesson 1: Accessing Government Assistance</ul>
      <li>Introduction to programs like food stamps, housing assistance, and educational grants.</li>

      <ul>Lesson 2: Tax Basics for Individuals</ul>

      <li>Understanding income tax, deductions, and credits.</li>
      <li>Filing taxes and accessing available tax benefits.</li>
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div></Link>
      <a href="/quiz"><button className="quizy">Take a Quiz!</button></a>
</div>

    )
}