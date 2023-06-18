// @ts-nocheck

// Import the necessary functions or objects from your package
import {
  addEnterKeyListener,
  str,
} from "./node_modules/only-numbers-gabbekg/only-numbers.js";
addEnterKeyListener();

// Use the imported function or object in your project
//str();
const btn = document.getElementById("myBtn");
btn.addEventListener("click", str);
