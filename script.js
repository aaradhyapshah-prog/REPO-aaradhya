// Get the form elements
const form = document.getElementById("survey-form");
const resultDiv = document.getElementById("survey-result");
const resultSummary = document.getElementById("result-summary");
const btnNewSurvey = document.getElementById("btn-new-survey");

// When page loads, connect the buttons to functions
document.addEventListener("DOMContentLoaded", function() {
    form.addEventListener("submit", handleFormSubmit);
    btnNewSurvey.addEventListener("click", handleNewSurvey);
});

// FUNCTION 1: Handle form submission
function handleFormSubmit(event) {
    // Prevent page from refreshing
    event.preventDefault();
    
    // Get each answer from the form
    const answer1 = document.getElementById("skill-level").value;
    const answer2 = document.getElementById("easier-tech").value;
    const answer3 = document.getElementById("main-goal").value;
    const answer4 = document.getElementById("layout-tool").value;
    const answer5 = document.getElementById("duration").value;
    const answer6 = document.getElementById("frustration").value;
    const answer7 = document.getElementById("frameworks").value;
    const answer8 = document.getElementById("confidence").value;
    const answer9 = document.getElementById("resource").value;
    const answer10 = document.getElementById("next-topic").value;
    
    // Show the results
    showResults(answer1, answer2, answer3, answer4, answer5, 
                answer6, answer7, answer8, answer9, answer10);
}

// FUNCTION 2: Show the results
function showResults(ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10) {
    // Create HTML with all the answers
    const html = `
        <p><strong>1. Skill Level:</strong> ${ans1}</p>
        <p><strong>2. Easier Tech:</strong> ${ans2}</p>
        <p><strong>3. Why Learn:</strong> ${ans3}</p>
        <p><strong>4. Layout Tool:</strong> ${ans4}</p>
        <p><strong>5. How Long:</strong> ${ans5}</p>
        <p><strong>6. Hard About CSS:</strong> ${ans6}</p>
        <p><strong>7. Frameworks:</strong> ${ans7}</p>
        <p><strong>8. Confidence:</strong> ${ans8}</p>
        <p><strong>9. Helpful Resource:</strong> ${ans9}</p>
        <p><strong>10. Learn Next:</strong> ${ans10}</p>
    `;
    
    // Put the HTML in the result box
    resultSummary.innerHTML = html;
    
    // Show the result box
    resultDiv.style.display = "block";
    
    // Scroll down to show results
    resultDiv.scrollIntoView({ behavior: "smooth" });
    
    // Clear the form so user can fill it again
    form.reset();
}

// FUNCTION 3: Handle "Take Survey Again" button click
function handleNewSurvey() {
    // Hide the result box
    resultDiv.style.display = "none";
    
    // Scroll back to the form
    form.scrollIntoView({ behavior: "smooth" });
}
