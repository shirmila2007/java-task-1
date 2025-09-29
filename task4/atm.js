function atm(){
    let pin=prompt("enter the pin:");
    if (pin==="1234"){
        let trans=confirm("PIN verified successfully!\nDo you want to continue");
        let bal=1000;
        let balance=Number(bal);
        if(trans){
            let choice=prompt("choose a transaction:\n1 = Withdraw\n2 = Deposit\n3 = Check balance");
            switch(choice){
                case "1":
                    alert("Withdrawal selected.");
                    let a=prompt("Please enter the amount you want to withdraw:");
                    if(a > balance){
                        alert("Insufficient balance!")
                    }else{
                        balance = balance - a;
                    alert("Withdrawal successful!\nNew balance:"+ balance);
                    }
                    break;
                case "2":
                    alert("Deposit selected.");
                    let b=prompt("Please enter the amount you want to deposit:");
                    let b1=Number(b);
                    balance += b1;
                    alert("Deposit successful!\nNew balance:" +balance);
                    break;
                case "3":
                    alert("Balance inquiry selected.\n");
                    alert("Your current balance is:"+balance);
                    break;
                default:
                    alert("Invalid category");
            }
        }else{
           alert("May be next time!\nGoodbye!"); 
        }
    }else{
        alert("Invalid Login!");
    }
}


atm();