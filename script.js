function checkResponse(clicked) {
    const feedbackMessage = document.getElementById('feedback-message');
    if (clicked) {
        feedbackMessage.textContent = "You clicked the phishing link. This could lead to your information being compromised. Always verify the legitimacy of emails before clicking on links.";
        feedbackMessage.style.color = "red";
    } else {
        feedbackMessage.textContent = "Good job! You ignored the phishing link. Be cautious of suspicious emails.";
        feedbackMessage.style.color = "green";
    }
}
