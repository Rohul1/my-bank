console.log("eventlitchiner")

let depositBtn = document.getElementById("btn-deposit");

depositBtn.addEventListener("click", function () {

    console.log("Deposit btn clicked");
    let depositField = document.getElementById("deposit-field");

    let depositFieldString = depositField.value
    console.log(depositFieldString);
    depositField.value = "";

    if (depositFieldString > 0) {
        alert("Ok")
    }
    else {
        alert("Please enter positive amount")
    }


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
let withdrawBtn = document.getElementById("btn-withdraw");
withdrawBtn.addEventListener("click", function () {
    console.log("withdraw btn clicked")

    let withdrawField = document.getElementById("withdraw-field");

    let withdrawFieldString = withdrawField.value
    console.log(withdrawFieldString);

    withdrawField.value = "";



    let withdrawTotal = document.getElementById("Withdraw-total");
    let previousWithdrawTotalString = withdrawTotal.innerText;
    console.log(previousWithdrawTotalString);


    let newWithdrawTotal = parseInt(previousWithdrawTotalString) + parseInt(withdrawFieldString);
    withdrawTotal.innerText = newWithdrawTotal;
    console.log(newWithdrawTotal);

    let balanceTotal2 = document.getElementById("Balance-total");
    let previousBalanceTotalString2 = balanceTotal2.innerText;

    let newBalanceTotal2 = parseInt(previousBalanceTotalString2) - parseInt(withdrawFieldString);
    balanceTotal2.innerText = newBalanceTotal2;
    console.log(newBalanceTotal2)

})