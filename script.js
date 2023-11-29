document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const answers = {
        A: 0,
        B: 0
        // Add more answer categories if needed
    };

    const formData = new FormData(this);

    for (const [key, value] of formData.entries()) {
        answers[value]++;
    }

    let result = "Your Personality: ";
    if (answers.A > answers.B) {
        result += "Calm and Collected";
    } else {
        result += "Anxious and Energetic";
    }

    document.getElementById('result').innerText = result;
});
