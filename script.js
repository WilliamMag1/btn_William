const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const buttons = document.querySelector('p');


buttons.addEventListener("click", update);


function update() {
  const name = prompt("Enter");
  buttons.textContent = ` ${name}`;
}
