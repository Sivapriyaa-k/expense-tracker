document.addEventListener("DOMContentLoaded", () => {
    var expenseForm = document.getElementById("expense-form");
    var expenseNameInput = document.getElementById("expense-name");
    var expenseAmountInput = document.getElementById("expense-amount");
    var addExpenseBtn = document.getElementById("add-expense");
    var expenseList = document.getElementById("expense-list");
    var priceSpan = document.getElementById("price-span");

    let expenses = JSON.parse(localStorage.getItem("Expenses")) || [];
    let totalAmount = calculateTotal();
    console.log(totalAmount);
    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        var expenseName = expenseNameInput.value.trim();
        var expenseAmount = parseFloat(expenseAmountInput.value.trim());

        if (expenseName !== "" && !isNaN(expenseAmount) && expenseAmount > 0) {
            const newexpense = {
                id: Date.now(),
                name: expenseName,
                amount: expenseAmount
            }

            expenses.push(newexpense);
            saveExpenseToLocal();

            // clear input
            expenseNameInput.value = "";
            expenseAmountInput.value = "";
        }
    })

    function renderExpense(expenses) {

    }

    function calculateTotal() {
        var total = 0;
        expenses.forEach(expense => {
            total += expense.amount;
        });
        console.log(total)
        return total;
    }

})