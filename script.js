document.addEventListener("DOMContentLoaded", () => {
    var expenseForm = document.getElementById("expense-form");
    var expenseNameInput = document.getElementById("expense-name");
    var expenseAmountInput = document.getElementById("expense-amount");
    var addExpenseBtn = document.getElementById("add-expense");
    var expenseList = document.getElementById("expense-list");
    var priceSpan = document.getElementById("price-span");

    let expenses = JSON.parse(localStorage.getItem("Expenses")) || [];
    let totalAmount = calculateTotal();

    if (totalAmount > 0) {
        updateTotal();
        renderExpense();
    }
    console.log(expenses);
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
            updateTotal();
            renderExpense();
            // clear input
            expenseNameInput.value = "";
            expenseAmountInput.value = "";
        }
    })

    function renderExpense() {

        expenseList.innerHTML = "";
        expenses.forEach(expense => {
            const li = document.createElement("li")
            li.innerHTML = `${expense.name} - $${expense.amount}
            <button data-id=${expense.id}>Delete</button>`
            expenseList.appendChild(li)
        });

    }

    function calculateTotal() {

        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    function saveExpenseToLocal() {
        localStorage.setItem("Expenses", JSON.stringify(expenses))
    }

    function updateTotal() {
        totalAmount = calculateTotal();
        priceSpan.textContent = totalAmount.toFixed(2);
    }

    // delete

    expenseList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {

        }
    })
})