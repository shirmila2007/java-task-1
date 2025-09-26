let mark="51";
let a=Number(mark);
let grade;
switch(true){
    case (a>90 && a<100):
        grade="A";
        break
    case (a>75 && a<89):
        grade="B";
        break
    case (a>50 && a<74):
        grade="C";
        break
    case (a<50):
        grade="Fail";
    default:
        grade="Invalide";
}
console.log(grade);