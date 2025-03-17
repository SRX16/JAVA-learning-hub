//alert('Tip : Copy the code and Try to fix it ');

function submitCode() {
    let userCode = document.getElementById("javaCode").value;
    let isCorrect = userCode.includes("System.out.println") && userCode.includes(";") && userCode.includes(")");

    // Store result in localStorage for output page
    localStorage.setItem("debugResult", isCorrect ? "Hello, world!" : "Error: Syntax issue detected.");

    // Redirect to output page
    window.location.href = "output.html";
}
