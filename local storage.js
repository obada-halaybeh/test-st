let projectNameinput = document.querySelector(".projectName");
let saveBtn = document.querySelector(".save");
let loadBtn = document.querySelector(".load");
let deleteBtn = document.querySelector(".delete");
let display = document.querySelector("p");

saveBtn.addEventListener("click", () => {
  localStorage.setItem("name", projectNameinput.value);
});

loadBtn.addEventListener("click", () => {
  let storedname = localStorage.getItem("name");

  if (storedname) {
    display.textContent = storedname;
  } else {
    display.textContent = "No project name found.";
  }
});

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("name");
});
