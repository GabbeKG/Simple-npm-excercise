import numOnly from "only-numbers-gabbekg";

// Use the numOnly function
//const input = "ABC123!@#";
//console.log(result); // Output: "123"

const btn = document.getElementById("myBtn");
const div = document.getElementById("formatted");
btn.addEventListener("click", () => {
  const input = document.getElementById("num").value;

  const result = numOnly(input);
  console.log(result);
  let formatted = document.createElement("h2");
  formatted.textContent = result;
  div.appendChild(formatted);
  // Perform further actions with the cleaned number
});
