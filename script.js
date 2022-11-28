function calculatePayments() {
    // STEP1: PULL DATA
    let amount = +document.getElementById("inputAmount").value;
    let rate = +document.getElementById("inputRate").value / 100;
    let months = +document.getElementById("inputMonths").value;
    // STEP2: CALCULATE FORMULA
    let payment = amount * rate * Math.pow(1 + rate,months) / (Math.pow(1 + rate,months) - 1)
    // STEP3: CREATE TABLE
    console.log(amount)
    console.log(rate)
    console.log(months)
    console.log(payment.toFixed(2))
}