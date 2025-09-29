function budget(){
    let i=prompt("enter the annual income:");
    let income=Number(i);
    let r=prompt("enter the rent");
    let rent=Number(r);
    let g=prompt("enter the groceries expenses:")
    let groceries=Number(g);
    let t=prompt("enter the transport expenses:");
    let transport=Number(t);
    let total=rent + groceries + transport;
    let per=(total/income)*100;
    if(total>income){
        alert("Overspending\n");
    }else{
        let balance=income-total;
        alert("Within Budget");
        alert("Total expenses:"+ total + "\nremaining balance:" + balance + "\npercentage spent:" + per);
    }
 }
 budget();