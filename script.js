document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Add task
  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle done on click
    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.classList.add("delete-btn");
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent toggle
      li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  });

  // Enter key support
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addBtn.click();
  });
});
