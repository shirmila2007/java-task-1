function quiz(){
    let score=0;
    let q1=prompt("What is the national animal of India??\na.Elephant\nb.Tiger\nc.Lion\nd.deer");
    switch(q1){
        case 'b':
            score++;
            break;
    }
    let q2=prompt("What is the largest planet in our solar system?\na.Earth\nb.Neptune\nc.Saturn\nd.Jupiter");
    switch(q2){
        case 'd':
            score++;
            break;
    }
    let q3=prompt("Which is the fastest land animal?\na.Cheetah\nb.Lion\nc.Deer\nd.Tiger");
    switch(q3){
        case 'a':
            score++;
            break;
    }
    alert("Final Score: " + score + "/3");
}
quiz();