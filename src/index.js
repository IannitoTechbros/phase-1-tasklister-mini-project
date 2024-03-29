document.addEventListener("DOMContentLoaded", function () {
  const createTaskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  createTaskForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const newTaskInput = document.getElementById("new-task-description");
    const taskText = newTaskInput.value.trim(); // Get the task text and remove leading/trailing whitespace

    if (taskText !== "") {
      const listItem = document.createElement("li"); // Create a new list item
      listItem.textContent = taskText; // Set the text content of the list item
      taskList.appendChild(listItem); // Append the list item to the task list
      newTaskInput.value = ""; // Clear the input field
    } else {
      alert("Please enter a task."); // Show an alert if the input field is empty
    }
  });
});
