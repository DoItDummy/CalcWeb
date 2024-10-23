 function calculate() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var operator = document.getElementById("operator").value;
            var result;

            // Perform calculation based on the operator selected
            if (operator === "add") {
                result = num1 + num2;
            } else if (operator === "subtract") {
                result = num1 - num2;
            } else if (operator === "multiply") {
                result = num1 * num2;
            } else if (operator === "divide") {
                if (num2 === 0) {
                    result = "Cannot divide by zero!";
                } else {
                    result = num1 / num2;
                }
            }

            // Display result
            document.getElementById("result").innerText = "Result: " + result;
	}
