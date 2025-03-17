function showText() {
    document.getElementById('content').innerHTML = `
    <h2>Text Tutorial</h2>
        <div class="lesson-container">
    <div class="lesson-box">
        <h2>Java Programming Basics</h2>

        <h3>Introduction to Java</h3>
        <p>Java is a high-level, object-oriented programming language. It is widely used for web, mobile, and desktop applications.</p>

        <h3>Key Features:</h3>
        <ul>
            <li><strong>Platform Independent:</strong> Runs on any system with JVM.</li>
            <li><strong>Object-Oriented:</strong> Uses OOP principles like inheritance and polymorphism.</li>
            <li><strong>Secure & Robust:</strong> Provides strong memory management and error handling.</li>
        </ul>
    </div>

    <div class="lesson-box">
        <h3>Setting Up Java</h3>
        <p>To start coding in Java, install the <strong>Java Development Kit (JDK)</strong> and set up an <strong>Integrated Development Environment (IDE)</strong> like IntelliJ IDEA or Eclipse.</p>
    </div>

    <div class="lesson-box">
        <h3>Writing Your First Java Program</h3>
        <pre class="code-block"><code>
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
        </code></pre>
    </div>

    <div class="lesson-box">
        <h3>Java Basics</h3>

        <h4>1. Variables and Data Types</h4>
        <pre class="code-block"><code>
int age = 25;
double price = 99.99;
char grade = 'A';
boolean isJavaFun = true;
String name = "John Doe";
        </code></pre>

        <h4>2. Control Flow Statements</h4>
        <h5>If-Else Statement:</h5>
        <pre class="code-block"><code>
if (age > 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}
        </code></pre>

        <h5>For Loop:</h5>
        <pre class="code-block"><code>
for (int i = 1; i <= 5; i++) {
    System.out.println("Iteration: " + i);
}
        </code></pre>
    </div>
    `;
}

function showVideo() {
    document.getElementById('content').innerHTML = `
        <h2>Video Tutorial</h2>
        <h3>Lesson 1</h3>
        <video controls>
            <source src="1.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
}


function showCode() {
    document.getElementById('content').innerHTML = `<h2>Sample Codes</h2>
    <div class="code-container">
        <div class="code-box">
            <h3>Calculator Code</h3>
            <pre><code>
    public class Calculator {
        public static void main(String[] args) {
            java.util.Scanner scanner = new java.util.Scanner(System.in);
            System.out.println("Enter first number: ");
            double num1 = scanner.nextDouble();
            System.out.println("Enter operator (+, -, *, /): ");
            char operator = scanner.next().charAt(0);
            System.out.println("Enter second number: ");
            double num2 = scanner.nextDouble();
            double result;
            switch (operator) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': result = num1 / num2; break;
                default: System.out.println("Invalid operator"); return;
            }
            System.out.println("Result: " + result);
            scanner.close();
        }
    }
            </code></pre>
        </div>
        <div class="code-box">
            <h3>Code Box 2</h3>
            <pre><code>
            // Add your code here
            </code></pre>
        </div>
        <div class="code-box">
            <h3>Code Box 3</h3>
            <pre><code>
            // Add your code here
            </code></pre>
        </div>
        <div class="code-box">
            <h3>Code Box 4</h3>
            <pre><code>
            // Add your code here
            </code></pre>
        </div>
    </div>`;
}
function openConsolePage() {
    window.location.href = "console.html";
}
