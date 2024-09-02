const button = document.querySelector("button");
const input = document.querySelector(".data");
const list = document.querySelector(".list");
const label = document.querySelector("h1");
clickHandler = () => {
  label.style.display = "block";
  const data = input.value;
  input.value = null;
  const newElement = document.createElement("li");
  newElement.classList.add("list-item");
  list.appendChild(newElement);
  const work = document.createElement("span");
  newElement.appendChild(work);
  work.innerHTML = data;
  const buttonClear = document.createElement("button");
  //   buttonClear.innerHTML = "remove";
  buttonClear.classList.add("remove");
  newElement.appendChild(buttonClear);
  const remove = document.querySelectorAll(".remove");
  const clickHandler = (event) => {
    event.target.parentElement.remove();
  };
  remove.forEach((item) => item.addEventListener("click", clickHandler));
};
button.addEventListener("click", clickHandler);
