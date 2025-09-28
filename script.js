document.getElementById("addTask").addEventListener("click", function () {
    const taskInput = document.getElementById("taskinput");
    const taskText = taskInput.value.trim();
    const errorMsg = document.getElementById("error");
  
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
  
       //Add to eidit option
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("edit-btn");
      li.appendChild(editButton);
  
      // ✅ Edit task on editButton click
      editButton.addEventListener("click", function () {
        const newTaskText = prompt("Edit your task:", taskText);
        if (newTaskText !== null && newTaskText.trim() !== "") {
          li.firstChild.textContent = newTaskText.trim(); // Update text
        }
      });
  

      // ✅ Mark completed
      li.addEventListener("click", function () {
        li.classList.toggle("completed");
      });
  
      // ✅ Delete task on double click
      li.addEventListener("dblclick", function () {
        li.remove();
      });
  
      // ✅ Append to list
      document.getElementById("taskList").appendChild(li);
      taskInput.value = "";
      errorMsg.style.display = "none"; // Hide error if visible
    } else {
      // ✅ Show error if empty input
      errorMsg.textContent = "Please enter a task";
      errorMsg.style.display = "block";
  
      // Hide after 2 seconds
      setTimeout(() => {
        errorMsg.style.display = "none";
      }, 2000);
    }
  });
  document.querySelector(".dark").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Add task on Enter key press
document.getElementById("taskinput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("addTask").click();
  }
});


  
  


