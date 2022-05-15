// Add event on window load

window.addEventListener("load", () => {
  const form = document.querySelector(".form");
  const input = document.querySelector("input");
  const listEl = document.querySelector(".listItems");

  //GEt data from local Storage
  let todos = JSON.parse(localStorage.getItem("tasks"))
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  // add event onto the form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // get the form value
    const task = input.value;
    todos.push(task);
    localStorage.setItem("tasks", JSON.stringify(todos));
    console.log(todos);
    //Check if there is a value
    if (!task) {
      alert("Please fill out the task!");
      return;
    }

    // Create the elements to display the value from the form
    const li = document.createElement("li");
    li.classList.add("list");

    const item = document.createElement("input");
    item.classList.add("item");
    item.type = "text";
    item.value = task;
    item.setAttribute("readonly", "readonly");

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const editBtn = document.createElement("button");
    editBtn.classList.add("btnEdit");
    editBtn.innerHTML = "EDIT";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btnDelete");
    deleteBtn.innerHTML = "DEL";

    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);

    li.appendChild(item);
    li.appendChild(buttons);

    listEl.appendChild(li);

    input.value = "";
    // add event to edit the values

    editBtn.addEventListener("click", () => {
      if (editBtn.innerText.toLowerCase() === "edit") {
        item.removeAttribute("readonly");
        item.focus();
        editBtn.innerText = "Save";
      } else {
        item.setAttribute("readonly");
        editBtn.innerText = "EDIT ";
      }
    });

    deleteBtn.addEventListener("click", () => {
      listEl.removeChild(li);
    });
  });
});
