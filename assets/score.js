function endGame() {
  // Stop the timer
  clearInterval(timer);

  // Store the user's score and initials in local storage
  var initialsValue = initials.value.trim();
  if (initialsValue !== "") {
    var scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({
      initials: initialsValue,
      score: score
    });
    localStorage.setItem("scores", JSON.stringify(scores));
  }

  // Navigate to the high score page
  window.location.href = "highscore.html";
}