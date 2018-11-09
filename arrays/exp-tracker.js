const account = {
  name: "Serge S.",
  expenses: [],
  income: [],
  addIncome: function(descr, amount) {
    this.income.push({
      description: descr,
      amount: amount
    });
  },
  addExpense: function(descr, amount) {
    this.expenses.push({
      description: descr,
      amount: amount
    });
  },
  getAccountSummary: function() {
    let totalExpenses = 0;
    let totalIncome = 0;
    let accountBalance = 0;
    this.expenses.forEach(function(expense) {
      return (totalExpenses += expense.amount);
    });
    this.income.forEach(function(income) {
      return (totalIncome += income.amount);
    });

    accountBalance = totalIncome - totalExpenses;

    return `${
      this.name
    } has a balance of $${accountBalance}. $${totalIncome} in income and $${totalExpenses} in expenses.`;
  }
};

// Expense -> description, amount
//addExpense -> description, amount
//getAccountSummary -> total up all expenses -> Serge has $1000 in expenses.

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

account.addExpense("Rent", 700);
account.addExpense("Coffee", 2);
account.addIncome("Main Job", 1000);

console.log(account.getAccountSummary());
