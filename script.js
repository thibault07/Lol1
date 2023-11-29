document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    let redirectUrl = '';

    // Check the answer for question 2 (q2)
    const q2Answer = formData.get('q2');
    switch (q2Answer) {
        case 'A':
            redirectUrl = 'quiz-top.html'; // URL for top quiz
            break;
        case 'B':
            redirectUrl = 'quiz-mid.html'; // URL for TOP quiz
            // Note: You have multiple 'B' options for q2, which need to be distinguished if they lead to different quizzes
            break;
        case 'C':
             redirectUrl = 'quiz-jungler.html'; // URL for top quiz
             break;
        case 'D':
             redirectUrl = 'quiz-adc.html'; // URL for TOP quiz
             // Note: You have multiple 'B' options for q2, which need to be distinguished if they lead to different quizzes
             break;
        case 'E':
            redirectUrl = 'quiz-support.html'; // URL for TOP quiz
            // Note: You have multiple 'B' options for q2, which need to be distinguished if they lead to different quizzes
            break;
            // Add cases for other answers if necessary
        default:
            redirectUrl = 'defaultQuiz.html'; // Default or error handling URL
            break;
    }

    // Redirect based on the answer
    if (redirectUrl) {
        window.location.href = redirectUrl;
    } else {
        // Handle case where no valid answer was chosen or no redirection URL is set
        document.getElementById('result').innerText = 'Please select an option for question 2.';
    }
});
