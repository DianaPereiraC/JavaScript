function calculatePayments() {
    cleanTable()
    // STEP1: PULL DATA
    let amount = +document.getElementById("inputAmount").value;
    let rate = +document.getElementById("inputRate").value / 100;
    let months = +document.getElementById("inputMonths").value;
    
    let typeLoan = getLoanType()
    if (typeLoan == "typeFrench"){
        // FRENCH AMORTIZATION
        // STEP2: CALCULATE FORMULA
        let payment = amount * rate * Math.pow(1 + rate,months) / (Math.pow(1 + rate,months) - 1)
        // STEP3: CREATE TABLE
        for (let index = 0; index < months; index++) {
            // Interes
            let interests = rate*amount
            // Pago a capital
            let capitalPayment = payment - interests
            
            printRow(index+1, amount, capitalPayment, interests, payment)
            
            // Remaining
            amount -= capitalPayment
        }
    } else {
        // AMORTIZACION TIPO ALEMAN
        // STEP2: CALCULATE FORMULA
        let capitalPayment = amount / months
        for (let index = 0; index < months; index++) {
            // Interes
            let interests = rate*amount
            // Cuota
            let payment = capitalPayment + interests

            printRow(index+1, amount, capitalPayment, interests, payment)
            
            // Remaining
            amount -= capitalPayment
        }
    }
    printRow("", 0, 0, 0, 0)
}

function getLoanType() {
    let loanTypeInput = document.getElementsByName("typeLoan")

    let returnValue = null
    loanTypeInput.forEach(element => {
        if(element.checked) {
            returnValue = element.value
        }
    });
    return returnValue
}

function cleanTable() {
    let table = document.getElementById("amortizationTable")
    table.innerHTML = ""
}

function printRow(period, amount, amortization, interest, payment) {
    let table = document.getElementById("amortizationTable")
    let row = table.insertRow(-1)
    let cPeriod = row.insertCell(-1)
    let cAmount = row.insertCell(-1)
    let cAmortization = row.insertCell(-1)
    let cInterest = row.insertCell(-1)
    let cPayment = row.insertCell(-1)

    cPeriod.innerHTML = period
    cAmount.innerHTML = "$" + amount.toFixed(2)
    cAmortization.innerHTML = "$" + amortization.toFixed(2)
    cInterest.innerHTML = "$" + interest.toFixed(2)
    cPayment.innerHTML = "$" + payment.toFixed(2)    
}