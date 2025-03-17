document.addEventListener("DOMContentLoaded", function () {
    let outputElement = document.getElementById("output");
    let loadingText = document.querySelector(".loading-text");
    let processingTitle = document.querySelector(".processing-title");

    // Correct code to display
    const correctCode = `public class DebugExample {
    public static void main(String[] args) {
        System.out.println("Hello, world!");  // Corrected code
    }
}`;

    // Get stored result
    let result = localStorage.getItem("debugResult") || "No result found.";

    // Wait for 2 seconds before revealing the output
    setTimeout(() => {
        // Hide "Processing Your Code..." and "Checking..."
        processingTitle.style.display = "none";
        loadingText.style.display = "none";

        // Show the correct code in the output
        outputElement.textContent = correctCode;

        // Also display the result feedback (correct or error message)
        let resultFeedback = document.createElement("p");
        resultFeedback.textContent = result;
        outputElement.appendChild(resultFeedback);

        outputElement.classList.remove("hidden");
    }, 2000);
});
