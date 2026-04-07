import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";
import { saveTaskChanges, deleteTask } from "./tasks/taskManager.js";

async function initTaskBoard() {
  const tasks = await loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  saveTaskChanges();
  deleteTask();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
