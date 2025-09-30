let student = {};

    function saveProfile() {
      try {
        let name = document.getElementById("name").value.trim();
        let birthYear = document.getElementById("birthYear").value.trim();
        let city = document.getElementById("city").value.trim();

        if (!name || !birthYear || !city) throw "Please fill all fields";

        student.name = name;
        student.birthYear = parseInt(birthYear);
        student.city = city;

        document.getElementById("profileOutput").innerText =
          `Profile Saved!  Name: ${name}, City: ${city}`;
      } catch (err) {
        document.getElementById("profileOutput").innerText =  err;
      }
    }
    function checkAge() {
      try {
        if (!student.birthYear) throw "Save your profile first!";
        let currentYear = new Date().getFullYear();
        let age = currentYear - student.birthYear;
        student.age = age;

        let eligibility = age >= 18 ? "Eligible! " : "Not Eligible!";
        document.getElementById("ageOutput").innerText ="Age: " + age + " years";
      } catch (err) {
        document.getElementById("ageOutput").innerText =  err;
      }
    }
    function showGreeting() {
      let hour = new Date().getHours();
      let greeting = "";
      if (hour < 12) greeting = "Good Morning! ";
      else if (hour < 18) greeting = "Good Afternoon!";
      else greeting = "Good Evening! ";

      let name = student.name ? student.name : "Student";
      document.getElementById("greetingOutput").innerText = greeting;
    }
    function calculate(op) {
      try {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);

        if (isNaN(num1) || isNaN(num2)) throw "Enter valid numbers!";

        let result;
        switch (op) {
          case "add": result = num1 + num2; break;
          case "sub": result = num1 - num2; break;
          case "mul": result = num1 * num2; break;
          case "div":
            if (num2 === 0) throw "Cannot divide by zero!";
            result = num1 / num2;
            break;
        }

        document.getElementById("calcOutput").innerText = `Result: ${result}`;
      } catch (err) {
        document.getElementById("calcOutput").innerText =  + err;
      }
    }
    function showQuote() {
      let quotes = [
        "Believe in yourself and all that you are.",
        "The harder you work, the luckier you get.",
        "Every day is a chance to learn something new.",
        "Stay positive, work hard, make it happen.",
        "Success is the sum of small efforts repeated daily."
      ];
      let random = Math.floor(Math.random() * quotes.length);
      document.getElementById("quoteOutput").innerText = quotes[random];
    }
    function showJSON() {
      try {
        if (!student.name) throw "Save your profile first!";
        document.getElementById("jsonOutput").innerText =
          JSON.stringify(student, null, 2);
      } catch (err) {
        document.getElementById("jsonOutput").innerText =  + err;
      }
    }