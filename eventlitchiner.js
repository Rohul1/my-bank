console.log("eventlitchiner")

let depositBtn = document.getElementById("btn-deposit");

depositBtn.addEventListener("click", function () {

    console.log("Deposit btn clicked");
    let depositField = document.getElementById("deposit-field");

    let depositFieldString = depositField.value
    console.log(depositFieldString);

    depositField.value = "";

    let depositTotal = document.getElementById("Deposit-total");
    let PreviousDepositTotalString = depositTotal.innerText
    console.log(PreviousDepositTotalString);


    let newDepositTotal = parseInt(PreviousDepositTotalString) + parseInt(depositFieldString);
    depositTotal.innerText = newDepositTotal;

    let balanceTotal = document.getElementById("Balance-total");
    let previousBalanceTotalString = balanceTotal.innerText;


    let newBalanceTotal = parseInt(previousBalanceTotalString) + parseInt(depositFieldString);
    balanceTotal.innerText = newBalanceTotal;
    console.log(newBalanceTotal);

})