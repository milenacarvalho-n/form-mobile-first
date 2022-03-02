const inputs = document.querySelectorAll("input-form");

// Adiciona o focus
function addFocus() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

// Remove o foco
function removeFocus() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

// chamando a função
inputs.forEach(input => {
  input.addEventListener("focus", addFocus);
  input.addEventListener("blur", removeFocus);
});
