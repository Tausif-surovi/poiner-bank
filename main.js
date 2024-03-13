const login = document.getElementById("login")

login.addEventListener('click', function () {
    const loginArea = document.getElementById("login-area")
    const tranArea = document.getElementById("transaction-area")
    tranArea.style.display = 'block'
    loginArea.style.display = 'none'
})

// const addDeposit = document.getElementById("addDeposit")
// addDeposit.addEventListener('click', function () {
//     const depositAmount = document.getElementById('depositAmount')
//     const currentDeposit = document.getElementById('currentDeposit')
//     const currentBalance = document.getElementById('currentBalance')
//     const totalDeposit = parseFloat(currentDeposit.innerText) + parseFloat(depositAmount.value)
//     const totalCurrentBalance = Number(currentBalance.innerText) + Number(depositAmount.value)
//     currentDeposit.innerText = totalDeposit;
//     currentBalance.innerText = totalCurrentBalance
// })
// const addWithdraw = document.getElementById("addWithdraw")
// addWithdraw.addEventListener('click', function(){
//     const withdrawAmount = document.getElementById("withdrawAmount")
//     const currentWithdraw = document.getElementById("currentWithdraw")
//     const currentBalance = document.getElementById("currentBalance")
//     const totalwithdraw = Number(withdrawAmount.value)+ Number(currentWithdraw.innerText)
//     const totalbalance =  Number(currentBalance.innerText) - Number(withdrawAmount.value)

//     currentWithdraw.innerText = totalwithdraw
//     currentBalance.innerText = totalbalance

// })

function UpdateBalance(action, amount, currentamount , balance){
    const Amount=document.getElementById(amount);
    const Currentamount = document.getElementById(currentamount);
    const Balance = document.getElementById(balance);

    c

    if(action === 'diposite'){
        const newamount = Number(Currentamount.innerText) + Number(Amount.value)
        const newbalance = Number(Balance.innerText) + Number(Amount.value)
        Currentamount.innerText=newamount;
        Balance.innerText = newbalance;
        Amount.value ="";
    }

    else if(action ==="withdraw" && transactionAmount<= Number(Balance.innerText)){
        const newamount = Number(Currentamount.innerText) + Number(Amount.value)
        const newbalance = Number(Balance.innerText) - Number(Amount.value)

        Currentamount.innerText=newamount;
        Balance.innerText = newbalance;
        Amount.value ="";
    }

   
    
}

const addDeposit = document.getElementById("addDeposit")
addDeposit.addEventListener('click', function(){
    UpdateBalance('diposite','depositAmount','currentDeposit','currentBalance');
})

const addWithdraw = document.getElementById("addWithdraw")
addWithdraw.addEventListener('click', function(){
    UpdateBalance('withdraw','withdrawAmount','currentWithdraw','currentBalance');
})