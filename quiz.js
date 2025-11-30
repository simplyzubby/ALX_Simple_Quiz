function checkAnswer() {
   const correctAnswer = "4"
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    let userAns = "";
    if (selectedRadio) {
    userAns = selectedRadio.value;
} else {
    alert("Please select an answer!");
    return; // stop function if no answer is selected
}
    // Step 4: Compare answers and give feedback
    if (userAns === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer is " + correctAnswer);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Select the submit button
    const submitButton = document.getElementById("submit-answer");

    // Step 2: Add click event listener
    submitButton.addEventListener("click", checkAnswer); // DO NOT use checkAnswer()
});
