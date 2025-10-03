let student={}
function register(){
    try{
        let name=document.getElementById("name").value.trim();
        let email=document.getElementById("email").value.trim();
        let age=document.getElementById("age").value.trim();
        if(!name ||!email || !age) throw "Please fill all fields";
        age=Number(age);
        if(age<12) throw "Not eligible! (age must be grater than 12)";
        student.name=name;
        student.email=email;
        student.age=age;
        document.getElementById("registeroutput").innerText="registered!";
        document.getElementById("quizbtn").hidden=false;
    }catch(err){
        document.getElementById("registeroutput").innerText=err;
        document.getElementById("quizbtn").hidden=true;
    }
}
function quiz() {
   let score = 0;
   let answer = {q1: "b", q2: "c", q3: "c", q4: "b", q5: "c",q6: "d", q7: "a", q8: "b", q9: "c", q10: "b"};
   for (let q in answer) {
      let selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === answer[q]) {
         score++;
      }
   }if (typeof student !== "undefined") {
      student.score = score;
   }
   let t = time();
   let g = grade(score);
   document.getElementById("resultoutput").innerText = "Please wait, calculating your result...";

   new Promise((resolve) => {
      setTimeout(() => resolve(), 2500);
   }).then(() => {
      document.getElementById("resultoutput").innerText =
         `Total Score = ${score}/10\nGrade: ${g}\nTimestamp: ${t}`;
   });
}

function grade(score){
    let percentage = (score/10)*100;
    let grade;
    if(percentage >= 90){
         grade = "A";
    }else if(percentage >= 75){
         grade = "B";
    }else if(percentage >= 50) {
        grade = "C";
    }else {
        grade = "NO GRADE";
    }

    student.percentage = percentage;
    student.grade = grade;
    return grade;
}
function time(){
    let timestamp=new Date();
    student.timestamp=timestamp;
    return timestamp;
}
function showJSON() {
        document.getElementById("jsonOutput").innerText =JSON.stringify(student, null, 2);
      } 
        