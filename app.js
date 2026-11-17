// Environment Configuration Reader

// Read port number with default value
const PORT = process.env.PORT || 8080;

// Read environment mode
const ENV = process.env.NODE_ENV || "development";

// Display configuration
console.log("Environment Configuration Reader");
console.log("---------------------------------");

console.log("Port Number:", PORT);
console.log("Environment Mode:", ENV);
