// @ts-nocheck

// Import the necessary functions from your package
const { addEnterKeyListener, str } = require("only-numbers-gabbekg");

// Use the imported functions in your project
addEnterKeyListener();

const btn = document.getElementById("myBtn");
btn.addEventListener("click", str);
