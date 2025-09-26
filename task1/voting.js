function votingChecker() {
  let again = true;

  while (again) {
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");

    if (age >= 18) {
      alert("Hello" + name + "you are eligible to vote");
    } else {
      alert("Sorry" + name + "you are not eligible to vote")
    }

    again = confirm("Do you want to check again?");
  }

  alert("Goodbye!");
}

votingChecker();