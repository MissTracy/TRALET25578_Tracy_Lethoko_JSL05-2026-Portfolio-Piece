// import { loadTasksFromStorage } from "./utils/localStorage.js";
import { getTasks } from "./tasks/taskManager.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";
import { saveTaskChanges, deleteTask } from "./tasks/taskManager.js";
// import { sidebarToggle } from "./ui/modalHandlers.js";
// import { themeToggle } from "./ui/modalHandlers.js";  
import { sidebarToggle, themeToggle } from "./ui/sidebarHandler.js";

async function initTaskBoard() {
  // const tasks = await loadTasksFromStorage();
  const tasks = await getTasks();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  saveTaskChanges();
  deleteTask();
  sidebarToggle();
  themeToggle();  
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
