document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("survey-form");
    const resultDiv = document.getElementById("survey-result");
    const resultSummary = document.getElementById("result-summary");

    form.addEventListener("submit", (event) => {
        // Stop form from refreshing the page on submit
        event.preventDefault();

        // Safely extract chosen strings or text contents from the fields
        const skillLevel = document.getElementById("skill-level").options[document.getElementById("skill-level").selectedIndex].text;
        const easierTech = document.getElementById("easier-tech").options[document.getElementById("easier-tech").selectedIndex].text;
        const mainGoal   = document.getElementById("main-goal").value.trim();
        const layoutTool = document.getElementById("layout-tool").options[document.getElementById("layout-tool").selectedIndex].text;
        const duration   = document.getElementById("duration").options[document.getElementById("duration").selectedIndex].text;
        const frustration = document.getElementById("frustration").value.trim();
        const frameworks = document.getElementById("frameworks").options[document.getElementById("frameworks").selectedIndex].text;
        const confidence = document.getElementById("confidence").options[document.getElementById("confidence").selectedIndex].text;
        const resource   = document.getElementById("resource").value.trim();
        const nextTopic  = document.getElementById("next-topic").options[document.getElementById("next-topic").selectedIndex].text;

        // Build cleanly structured markup inside the empty result block
        resultSummary.innerHTML = `
            <p><strong>1. Skill Level:</strong> ${skillLevel}</p>
            <p><strong>2. Easier Tech:</strong> ${easierTech}</p>
            <p><strong>3. Main Goal:</strong> ${mainGoal}</p>
            <p><strong>4. Layout Preference:</strong> ${layoutTool}</p>
            <p><strong>5. Duration:</strong> ${duration}</p>
            <p><strong>6. CSS Frustration:</strong> ${frustration}</p>
            <p><strong>7. Framework Usage:</strong> ${frameworks}</p>
            <p><strong>8. Responsive Confidence:</strong> ${confidence}</p>
            <p><strong>9. Primary Resource:</strong> ${resource}</p>
            <p><strong>10. Next Milestone:</strong> ${nextTopic}</p>
        `;

        // Display the hidden box container
        resultDiv.style.display = "block";

        // Scroll the viewport down to let the user review their answers
        resultDiv.scrollIntoView({ behavior: "smooth" });

        // Wipe the input values out so the user can take it clean again if desired
        form.reset();
    });
});