document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get user's answers
    var q1Answer = document.querySelector('input[name="q1"]:checked').value;
    var q2Answer = document.querySelector('input[name="q2"]:checked').value;
    var q3Answer = document.querySelector('input[name="q3"]:checked').value;
    // Calculate score
    var score = 0;
    if (q1Answer === "b") {
      score += 1;
    }
    if (q2Answer === "a") {
      score += 1;
    }
    if (q3Answer === "a") {
        score += 1;
    }
  
    // Display the user's score
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Quiz Results:</h2>";
    resultDiv.innerHTML += "<p>Your score is: " + score + "/" + 2 + "</p>";
  });