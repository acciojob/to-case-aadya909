function toCase(text) {
  // If the input string is empty, return "-"
  if (text === "") return "-";

  // Convert the string to lowercase and uppercase, then join with "-"
  return text.toLowerCase() + "-" + text.toUpperCase();
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));

