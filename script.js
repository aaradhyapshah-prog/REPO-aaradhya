/**
 * Survey Form Handler
 * Manages form submission, validation, and result display
 */

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", initializeSurvey);

/**
 * Initialize survey form event listeners
 */
function initializeSurvey() {
    const form = document.getElementById("survey-form");
    const btnNewSurvey = document.getElementById("btn-new-survey");

    // Form submission handler
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }

    // Reset button handler
    if (btnNewSurvey) {
        btnNewSurvey.addEventListener("click", resetSurvey);
    }
}

/**
 * Handle form submission
 * @param {Event} event - The form submit event
 */
function handleFormSubmit(event) {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
        return;
    }

    // Collect form data
    const formData = collectFormData();

    // Display results
    displayResults(formData);

    // Smooth scroll to results
    scrollToResults();
}

/**
 * Validate form fields
 * @returns {boolean} - True if form is valid, false otherwise
 */
function validateForm() {
    const form = document.getElementById("survey-form");
    const requiredFields = form.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
        const errorElement = document.getElementById(`${field.id}-error`);

        // Check if field is empty
        if (field.value.trim() === "" || field.value === "") {
            if (errorElement) {
                errorElement.textContent = "This field is required";
            }
            isValid = false;
        } else {
            // Clear error message if field is valid
            if (errorElement) {
                errorElement.textContent = "";
            }
        }
    });

    return isValid;
}

/**
 * Collect all form data efficiently
 * @returns {Object} - Object containing all survey responses
 */
function collectFormData() {
    const formData = {
        skillLevel: getSelectText("skill-level"),
        easierTech: getSelectText("easier-tech"),
        mainGoal: getInputValue("main-goal"),
        layoutTool: getSelectText("layout-tool"),
        duration: getSelectText("duration"),
        frustration: getInputValue("frustration"),
        frameworks: getSelectText("frameworks"),
        confidence: getSelectText("confidence"),
        resource: getInputValue("resource"),
        nextTopic: getSelectText("next-topic"),
        timestamp: new Date().toLocaleString(),
    };

    return formData;
}

/**
 * Get selected option text from a select element
 * @param {string} elementId - The ID of the select element
 * @returns {string} - The text of the selected option
 */
function getSelectText(elementId) {
    const element = document.getElementById(elementId);
    return element.options[element.selectedIndex].text;
}

/**
 * Get trimmed value from an input element
 * @param {string} elementId - The ID of the input element
 * @returns {string} - The trimmed value
 */
function getInputValue(elementId) {
    return document.getElementById(elementId).value.trim();
}

/**
 * Display form results in the result box
 * @param {Object} formData - The collected form data
 */
function displayResults(formData) {
    const resultDiv = document.getElementById("survey-result");
    const resultSummary = document.getElementById("result-summary");

    // Build HTML for results
    const resultsHTML = `
        <p><strong>1. Skill Level:</strong> ${escapeHTML(formData.skillLevel)}</p>
        <p><strong>2. Easier Tech:</strong> ${escapeHTML(formData.easierTech)}</p>
        <p><strong>3. Main Goal:</strong> ${escapeHTML(formData.mainGoal)}</p>
        <p><strong>4. Layout Preference:</strong> ${escapeHTML(formData.layoutTool)}</p>
        <p><strong>5. Duration:</strong> ${escapeHTML(formData.duration)}</p>
        <p><strong>6. CSS Frustration:</strong> ${escapeHTML(formData.frustration)}</p>
        <p><strong>7. Framework Usage:</strong> ${escapeHTML(formData.frameworks)}</p>
        <p><strong>8. Responsive Confidence:</strong> ${escapeHTML(formData.confidence)}</p>
        <p><strong>9. Primary Resource:</strong> ${escapeHTML(formData.resource)}</p>
        <p><strong>10. Next Milestone:</strong> ${escapeHTML(formData.nextTopic)}</p>
        <p style="margin-top: 20px; font-size: 14px; color: #999;"><em>Submitted: ${formData.timestamp}</em></p>
    `;

    // Update result summary and show result box
    resultSummary.innerHTML = resultsHTML;
    resultDiv.classList.add("show");

    // Optional: Save to localStorage
    saveToLocalStorage(formData);
}

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} text - The text to escape
 * @returns {string} - The escaped text
 */
function escapeHTML(text) {
    const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Save form data to browser localStorage
 * @param {Object} formData - The form data to save
 */
function saveToLocalStorage(formData) {
    try {
        const submissions = JSON.parse(localStorage.getItem("surveys")) || [];
        submissions.push(formData);
        localStorage.setItem("surveys", JSON.stringify(submissions));
        console.log("Survey saved successfully!");
    } catch (error) {
        console.warn("Could not save to localStorage:", error);
    }
}

/**
 * Scroll to results section smoothly
 */
function scrollToResults() {
    const resultDiv = document.getElementById("survey-result");
    resultDiv.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Reset the survey form and hide results
 */
function resetSurvey() {
    const form = document.getElementById("survey-form");
    const resultDiv = document.getElementById("survey-result");

    // Clear form
    form.reset();

    // Hide results
    resultDiv.classList.remove("show");

    // Scroll back to top of form
    form.scrollIntoView({ behavior: "smooth" });

    // Clear error messages
    document.querySelectorAll(".error-message").forEach((el) => {
        el.textContent = "";
    });
}
