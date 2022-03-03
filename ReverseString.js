function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "its not good";
  }
  const newString = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    newString.push(str[i]);
  }
  console.log(newString);
  return newString.join("");
}
reverse("Hi My name is Andrei");
