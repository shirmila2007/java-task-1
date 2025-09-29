function travel(){
    let ready=confirm("do you want to calculate travel fare?");
    if(ready){
        let d=prompt("enter the distance:");
        let distance=Number(d);
        let type=prompt("enter the mode of transportation:").toLowerCase();
        switch(type){
            case 'train':
                let e=5*distance;
                alert("total fare:"+e);
                break;
            case 'bus':
                let b=10*distance;
                alert("total fare:"+b);
                break;
            case 'flight':
                let c=100*distance;
                alert("total fare:"+c);
                break;
            case 'car':
                let d=25*distance;
                alert("total fare:"+d);
                break;
            default:
                alert("invalid mode");
    }
}
}
travel();