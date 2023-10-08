console.log("eventlitchiner")

let depositBtn = document.getElementById("btn-deposit");

depositBtn.addEventListener("click", function () {

    console.log("Deposit btn clicked");
    let depositField = document.getElementById("deposit-field");

    let depositFieldString = depositField.value
    console.log(depositFieldString);


    let depositTotal = document.getElementById("Deposit-total");
    let PreviousDepositTotalString = depositTotal.innerText
    console.log(PreviousDepositTotalString);


    let newDepositTotal = PreviousDepositTotalString + depositFieldString;
    console.log(newDepositTotal);
})