function startBank () {

let response = "";
let balance = 10000.00;
let count = 0;

do {

  response = prompt("Welcome to your bank, please select an option\n(Q)uit\n(W)ithdraw\n(B)alance\n(D)eposit");

  switch(response.toLowerCase()) {
    case "q":
      alert("Good bye");
      break;
    case "w":
      let withdraw = prompt("How much money would you like to withdraw?\nPlease enter a dollar amount greater than or equal to $0.01 and less than $50,000", "0.0");

    if(balance >= withdraw) {
        let prevBalance = balance;
        balance -= parseFloat(withdraw);

    if(balance < 500) {
        alert("Low balance warning");
      }
        alert("Previous Balance: $" + prevBalance +"\n"
              +"Withdraw: $" + withdraw + "\n"
              +"New Balance: $" + balance);
      } else if (withdraw < balance) {
        alert("Not enough funds: $" + balance)
      } else {
        alert("Please enter a valid dollar amount");
      }

      break;
    case "b":
      alert("Your balance is: $" + balance);
      break;
    case "d":
      let deposit = prompt("How much money would you like to deposit?\nPlease enter a dollar amount greater than or equal to $0.01 and less than $50,000", "0.0");
      if(deposit >= 0.01 && deposit < 50000.0) {
        let prevBalance = balance;
        balance += parseFloat(deposit);
        alert("Previous Balance: $" + prevBalance+"\n"
                +"Deposit: $" + deposit + "\n"
                +"New Balance: $" + balance);
      } else if (deposit < 0.01) {
        alert("The dollar amount entered is not valid")
      } else if (deposit >= 50000.0) {
        alert("The dollar amount is greater the the $50,000 deposit limit");
      } else {
        alert("Please enter a valid dollar amount");
      }
      break;
      default:

      break;
    }

} while(response.toLowerCase() != 'q');
}
