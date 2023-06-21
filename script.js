import numOnly from "only-numbers-gabbekg";

// Use the numOnly function
//const input = "ABC123!@#";
//console.log(result); // Output: "123"

const btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
  const input = document.getElementById("num").value;

  const result = numOnly(input);
  console.log(result);
  // Perform further actions with the cleaned number
});
